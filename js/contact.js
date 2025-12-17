// ===================================
// Contact Page JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        
        // ===================================
        // Form Validation
        // ===================================
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const subjectSelect = document.getElementById('subject');
        const messageTextarea = document.getElementById('message');
        const privacyCheckbox = document.getElementById('privacy');
        
        // Error display elements
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const phoneError = document.getElementById('phoneError');
        const subjectError = document.getElementById('subjectError');
        const messageError = document.getElementById('messageError');
        const privacyError = document.getElementById('privacyError');
        
        // Validation functions
        function validateName() {
            const value = nameInput.value.trim();
            if (value === '') {
                nameError.textContent = 'Numele este obligatoriu.';
                nameInput.style.borderColor = '#ef4444';
                return false;
            } else if (value.length < 3) {
                nameError.textContent = 'Numele trebuie să conțină minim 3 caractere.';
                nameInput.style.borderColor = '#ef4444';
                return false;
            } else {
                nameError.textContent = '';
                nameInput.style.borderColor = '#10b981';
                return true;
            }
        }
        
        function validateEmail() {
            const value = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (value === '') {
                emailError.textContent = 'Email-ul este obligatoriu.';
                emailInput.style.borderColor = '#ef4444';
                return false;
            } else if (!emailRegex.test(value)) {
                emailError.textContent = 'Email-ul nu este valid.';
                emailInput.style.borderColor = '#ef4444';
                return false;
            } else {
                emailError.textContent = '';
                emailInput.style.borderColor = '#10b981';
                return true;
            }
        }
        
        function validatePhone() {
            const value = phoneInput.value.trim();
            
            // Phone is optional, so only validate if filled
            if (value !== '') {
                const phoneRegex = /^[0-9+\-\s()]+$/;
                
                if (!phoneRegex.test(value)) {
                    phoneError.textContent = 'Numărul de telefon nu este valid.';
                    phoneInput.style.borderColor = '#ef4444';
                    return false;
                } else if (value.replace(/[^0-9]/g, '').length < 10) {
                    phoneError.textContent = 'Numărul de telefon este prea scurt.';
                    phoneInput.style.borderColor = '#ef4444';
                    return false;
                } else {
                    phoneError.textContent = '';
                    phoneInput.style.borderColor = '#10b981';
                    return true;
                }
            } else {
                phoneError.textContent = '';
                phoneInput.style.borderColor = '';
                return true;
            }
        }
        
        function validateSubject() {
            const value = subjectSelect.value;
            
            if (value === '') {
                subjectError.textContent = 'Vă rugăm selectați un subiect.';
                subjectSelect.style.borderColor = '#ef4444';
                return false;
            } else {
                subjectError.textContent = '';
                subjectSelect.style.borderColor = '#10b981';
                return true;
            }
        }
        
        function validateMessage() {
            const value = messageTextarea.value.trim();
            
            if (value === '') {
                messageError.textContent = 'Mesajul este obligatoriu.';
                messageTextarea.style.borderColor = '#ef4444';
                return false;
            } else if (value.length < 10) {
                messageError.textContent = 'Mesajul trebuie să conțină minim 10 caractere.';
                messageTextarea.style.borderColor = '#ef4444';
                return false;
            } else {
                messageError.textContent = '';
                messageTextarea.style.borderColor = '#10b981';
                return true;
            }
        }
        
        function validatePrivacy() {
            if (!privacyCheckbox.checked) {
                privacyError.textContent = 'Trebuie să acceptați politica de confidențialitate.';
                return false;
            } else {
                privacyError.textContent = '';
                return true;
            }
        }
        
        // Real-time validation
        nameInput.addEventListener('blur', validateName);
        nameInput.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                validateName();
            }
        });
        
        emailInput.addEventListener('blur', validateEmail);
        emailInput.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                validateEmail();
            }
        });
        
        phoneInput.addEventListener('blur', validatePhone);
        phoneInput.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                validatePhone();
            }
        });
        
        subjectSelect.addEventListener('change', validateSubject);
        
        messageTextarea.addEventListener('blur', validateMessage);
        messageTextarea.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                validateMessage();
            }
        });
        
        privacyCheckbox.addEventListener('change', validatePrivacy);
        
        // ===================================
        // Form Submit Handler
        // ===================================
        
        contactForm.addEventListener('submit', function(e) {
            // Validate all fields
            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isPhoneValid = validatePhone();
            const isSubjectValid = validateSubject();
            const isMessageValid = validateMessage();
            const isPrivacyValid = validatePrivacy();
            
            console.log('Form validation:', {
                name: isNameValid,
                email: isEmailValid,
                phone: isPhoneValid,
                subject: isSubjectValid,
                message: isMessageValid,
                privacy: isPrivacyValid
            });
            
            // If any validation fails, prevent submit
            if (!isNameValid || !isEmailValid || !isPhoneValid || !isSubjectValid || !isMessageValid || !isPrivacyValid) {
                e.preventDefault();
                
                console.log('Form validation failed - preventing submit');
                
                // Scroll to first error
                const firstError = contactForm.querySelector('.form-error:not(:empty)');
                if (firstError) {
                    firstError.closest('.form-group').scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                
                return false;
            }
            
            console.log('Form validation passed - allowing submit to PHP');
            
            // If JavaScript validation passes, allow form to submit normally to PHP
            return true;
        });
        
        // ===================================
        // Character Counter for Message
        // ===================================
        
        const charCounter = document.createElement('div');
        charCounter.style.textAlign = 'right';
        charCounter.style.fontSize = '0.85rem';
        charCounter.style.color = 'var(--text-secondary)';
        charCounter.style.marginTop = '0.25rem';
        messageTextarea.parentNode.insertBefore(charCounter, messageError);
        
        function updateCharCount() {
            const length = messageTextarea.value.length;
            charCounter.textContent = `${length} caractere`;
            
            if (length > 500) {
                charCounter.style.color = '#ef4444';
            } else if (length > 400) {
                charCounter.style.color = '#f59e0b';
            } else {
                charCounter.style.color = 'var(--text-secondary)';
            }
        }
        
        messageTextarea.addEventListener('input', updateCharCount);
        updateCharCount();
        
        // ===================================
        // Phone Number Formatting
        // ===================================
        
        phoneInput.addEventListener('input', function(e) {
            let value = this.value.replace(/\D/g, '');
            
            // Format Romanian phone number
            if (value.startsWith('40')) {
                if (value.length > 2) {
                    value = '+40 ' + value.substring(2);
                }
                if (value.length > 7) {
                    value = value.substring(0, 7) + ' ' + value.substring(7);
                }
                if (value.length > 11) {
                    value = value.substring(0, 11) + ' ' + value.substring(11, 14);
                }
            } else if (value.startsWith('0')) {
                if (value.length > 4) {
                    value = value.substring(0, 4) + ' ' + value.substring(4);
                }
                if (value.length > 8) {
                    value = value.substring(0, 8) + ' ' + value.substring(8, 11);
                }
            }
            
            this.value = value;
        });
        
    }
    
    // ===================================
    // Scroll Alert into View
    // ===================================
    
    const alert = document.querySelector('.alert');
    if (alert) {
        alert.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            alert.style.transition = 'all 0.5s ease';
            alert.style.opacity = '0';
            alert.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                alert.style.display = 'none';
            }, 500);
        }, 5000);
    }
    
});
