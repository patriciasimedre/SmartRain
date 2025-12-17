// ===================================
// Dashboard/Monitoring Page JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Initialize Charts
    // ===================================
    
    // Water Level Chart
    const levelChartCanvas = document.getElementById('levelChart');
    if (levelChartCanvas) {
        const levelCtx = levelChartCanvas.getContext('2d');
        const levelChart = new Chart(levelCtx, {
            type: 'line',
            data: {
                labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
                datasets: [{
                    label: 'Nivel Rezervor (%)',
                    data: [65, 68, 72, 70, 75, 78, 75],
                    borderColor: 'rgb(37, 99, 235)',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Water Quality Chart
    const qualityChartCanvas = document.getElementById('qualityChart');
    if (qualityChartCanvas) {
        const qualityCtx = qualityChartCanvas.getContext('2d');
        const qualityChart = new Chart(qualityCtx, {
            type: 'bar',
            data: {
                labels: ['Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm', 'Dum'],
                datasets: [{
                    label: 'Turbiditate (NTU)',
                    data: [15, 12, 18, 10, 14, 11, 12],
                    backgroundColor: 'rgba(14, 165, 233, 0.8)',
                    borderColor: 'rgb(14, 165, 233)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value + ' NTU';
                            }
                        }
                    }
                }
            }
        });
    }
    
    // ===================================
    // Real-time Data Simulation
    // ===================================
    
    function updateSensorData() {
        // Simulate real-time sensor data updates
        
        // Update turbidity
        const turbidity = document.getElementById('turbidity');
        if (turbidity) {
            const value = (Math.random() * 10 + 8).toFixed(1);
            turbidity.textContent = value;
        }
        
        // Update TDS
        const tds = document.getElementById('tds');
        if (tds) {
            const value = Math.floor(Math.random() * 50 + 220);
            tds.textContent = value;
        }
        
        // Update temperature
        const temperature = document.getElementById('temperature');
        if (temperature) {
            const value = (Math.random() * 3 + 17).toFixed(1);
            temperature.textContent = value;
        }
        
        // Update pH
        const ph = document.getElementById('ph');
        if (ph) {
            const value = (Math.random() * 0.6 + 6.9).toFixed(1);
            ph.textContent = value;
        }
        
        // Update flow rates
        const flowIn = document.getElementById('flowIn');
        if (flowIn) {
            const value = (Math.random() * 1 + 3.5).toFixed(1);
            flowIn.textContent = value;
        }
        
        const flowOut = document.getElementById('flowOut');
        if (flowOut) {
            const value = (Math.random() * 1 + 4).toFixed(1);
            flowOut.textContent = value;
        }
        
        // Update water level
        const waterLevel = document.getElementById('waterLevel');
        if (waterLevel) {
            const value = Math.floor(Math.random() * 5 + 73);
            waterLevel.textContent = value + '%';
        }
    }
    
    // Update sensor data every 5 seconds
    setInterval(updateSensorData, 5000);
    
    // ===================================
    // Control Panel Toggle Switches
    // ===================================
    
    const toggleSwitches = document.querySelectorAll('.toggle-switch input');
    
    toggleSwitches.forEach(toggle => {
        toggle.addEventListener('change', function() {
            const controlItem = this.closest('.control-item');
            const statusSpan = controlItem.querySelector('.control-status');
            
            if (this.checked) {
                if (this.id === 'mainPump' || this.id === 'filterSystem' || this.id === 'aiModule' || this.id === 'notifications') {
                    statusSpan.textContent = this.id === 'mainPump' ? 'Pornită' : 
                                            this.id === 'filterSystem' ? 'Activ' :
                                            this.id === 'aiModule' ? 'Activat' : 'Activate';
                } else {
                    statusSpan.textContent = 'Deschisă';
                }
            } else {
                if (this.id === 'mainPump' || this.id === 'filterSystem' || this.id === 'aiModule' || this.id === 'notifications') {
                    statusSpan.textContent = this.id === 'mainPump' ? 'Oprită' : 
                                            this.id === 'filterSystem' ? 'Inactiv' :
                                            this.id === 'aiModule' ? 'Dezactivat' : 'Dezactivate';
                } else {
                    statusSpan.textContent = 'Închisă';
                }
            }
            
            // Add to activity log
            addLogEntry(this.id, this.checked);
        });
    });
    
    // ===================================
    // Activity Log
    // ===================================
    
    function addLogEntry(action, status) {
        const logContainer = document.querySelector('.log-container');
        if (!logContainer) return;
        
        const now = new Date();
        const time = now.getHours().toString().padStart(2, '0') + ':' + 
                     now.getMinutes().toString().padStart(2, '0');
        
        const actionNames = {
            'mainPump': 'Pompă principală',
            'valveIn': 'Valvă intrare',
            'valveOut': 'Valvă ieșire',
            'filterSystem': 'Sistem filtrare',
            'aiModule': 'Modul AI',
            'notifications': 'Notificări'
        };
        
        const logItem = document.createElement('div');
        logItem.className = 'log-item';
        logItem.innerHTML = `
            <div class="log-time">${time}</div>
            <div class="log-icon ${status ? 'success' : 'warning'}">
                <i class="fas fa-${status ? 'check-circle' : 'exclamation-triangle'}"></i>
            </div>
            <div class="log-message">${actionNames[action]} ${status ? 'activată' : 'dezactivată'}</div>
        `;
        
        // Add to top of log
        logContainer.insertBefore(logItem, logContainer.firstChild);
        
        // Keep only last 10 entries
        while (logContainer.children.length > 10) {
            logContainer.removeChild(logContainer.lastChild);
        }
    }
    
    // ===================================
    // Mode Change Button
    // ===================================
    
    const changeModeBtn = document.querySelector('.change-mode-btn');
    if (changeModeBtn) {
        changeModeBtn.addEventListener('click', function() {
            const modes = ['Automat', 'Eco', 'Manual', 'Programat'];
            const currentMode = document.getElementById('operationMode');
            const currentIndex = modes.indexOf(currentMode.textContent);
            const nextIndex = (currentIndex + 1) % modes.length;
            
            currentMode.textContent = modes[nextIndex];
            
            // Add to activity log
            const logContainer = document.querySelector('.log-container');
            if (logContainer) {
                const now = new Date();
                const time = now.getHours().toString().padStart(2, '0') + ':' + 
                             now.getMinutes().toString().padStart(2, '0');
                
                const logItem = document.createElement('div');
                logItem.className = 'log-item';
                logItem.innerHTML = `
                    <div class="log-time">${time}</div>
                    <div class="log-icon info">
                        <i class="fas fa-info-circle"></i>
                    </div>
                    <div class="log-message">Mod de operare schimbat în: ${modes[nextIndex]}</div>
                `;
                
                logContainer.insertBefore(logItem, logContainer.firstChild);
            }
        });
    }
    
    // ===================================
    // Refresh Data Button (if exists)
    // ===================================
    
    const refreshBtn = document.getElementById('refreshData');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function() {
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Se actualizează...';
            
            setTimeout(() => {
                updateSensorData();
                this.innerHTML = '<i class="fas fa-sync-alt"></i> Actualizează';
            }, 1000);
        });
    }
    
    // ===================================
    // Chart Update Animation
    // ===================================
    
    function updateCharts() {
        if (typeof levelChart !== 'undefined') {
            // Add new data point and remove oldest
            const newValue = Math.floor(Math.random() * 10 + 70);
            levelChart.data.datasets[0].data.push(newValue);
            levelChart.data.datasets[0].data.shift();
            levelChart.update();
        }
    }
    
    // Update charts every 30 seconds
    setInterval(updateCharts, 30000);
    
    // ===================================
    // Status Cards Animation
    // ===================================
    
    const statusCards = document.querySelectorAll('.status-card');
    
    statusCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
    
});
