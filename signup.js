// Mobile Menu Toggle (giống trang chủ)
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenu.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Prevent click propagation on menu
    navLinks.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Password strength checker
function checkPasswordStrength(password) {
    let strength = 0;
    const strengthFill = document.getElementById('strengthFill');
    const strengthText = document.getElementById('strengthText');

    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/\d/)) strength++;
    if (password.match(/[^a-zA-Z\d]/)) strength++;

    strengthFill.className = 'strength-fill';
    
    switch(strength) {
        case 0:
        case 1:
            strengthFill.classList.add('weak');
            strengthText.textContent = 'Mật khẩu yếu';
            strengthText.style.color = '#dc2626';
            break;
        case 2:
            strengthFill.classList.add('medium');
            strengthText.textContent = 'Mật khẩu trung bình';
            strengthText.style.color = '#f59e0b';
            break;
        case 3:
            strengthFill.classList.add('strong');
            strengthText.textContent = 'Mật khẩu mạnh';
            strengthText.style.color = '#10b981';
            break;
        case 4:
            strengthFill.classList.add('very-strong');
            strengthText.textContent = 'Mật khẩu rất mạnh';
            strengthText.style.color = '#059669';
            break;
    }
}

// Toggle password visibility
function setupPasswordToggle() {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            togglePassword.innerHTML = type === 'password' ? '<i class="far fa-eye"></i>' : '<i class="far fa-eye-slash"></i>';
        });
    }

    if (toggleConfirmPassword && confirmPasswordInput) {
        toggleConfirmPassword.addEventListener('click', () => {
            const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            confirmPasswordInput.setAttribute('type', type);
            toggleConfirmPassword.innerHTML = type === 'password' ? '<i class="far fa-eye"></i>' : '<i class="far fa-eye-slash"></i>';
        });
    }
}

// Form validation
function validateForm() {
    const form = document.getElementById('signupForm');
    const inputs = form.querySelectorAll('input[required], select[required]');
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(error => {
        error.classList.remove('show');
    });
    document.querySelectorAll('.form-group input, .form-group select').forEach(input => {
        input.classList.remove('error');
    });

    // Check required fields
    inputs.forEach(input => {
        if (!input.value.trim()) {
            showError(input, 'Trường này là bắt buộc');
            isValid = false;
        }
    });

    // Validate email
    const email = document.getElementById('email');
    if (email.value && !isValidEmail(email.value)) {
        showError(email, 'Email không hợp lệ');
        isValid = false;
    }

    // Validate password
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    
    if (password.value.length < 8) {
        showError(password, 'Mật khẩu phải có ít nhất 8 ký tự');
        isValid = false;
    }

    if (password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Mật khẩu xác nhận không khớp');
        isValid = false;
    }

    // Check terms agreement
    const terms = document.getElementById('terms');
    if (!terms.checked) {
        showError(terms, 'Bạn phải đồng ý với điều khoản dịch vụ');
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(input, message) {
    input.classList.add('error');
    let errorElement = input.parentNode.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        input.parentNode.appendChild(errorElement);
    }
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

// Form submission
function setupFormSubmission() {
    const form = document.getElementById('signupForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        // Show loading state
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoading.style.display = 'block';

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message show';
            successMessage.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <strong>Đăng ký thành công!</strong> Vui lòng kiểm tra email để xác thực tài khoản.
            `;
            form.parentNode.insertBefore(successMessage, form);
            
            // Reset form
            form.reset();
            
        } catch (error) {
            showError(document.getElementById('email'), 'Có lỗi xảy ra. Vui lòng thử lại.');
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            btnText.style.display = 'block';
            btnLoading.style.display = 'none';
        }
    });
}

// Social login handlers
function setupSocialLogin() {
    const googleBtn = document.querySelector('.btn-google');
    const facebookBtn = document.querySelector('.btn-facebook');

    if (googleBtn) {
        googleBtn.addEventListener('click', () => {
            alert('Chức năng đăng ký với Google sẽ được tích hợp sau');
        });
    }

    if (facebookBtn) {
        facebookBtn.addEventListener('click', () => {
            alert('Chức năng đăng ký với Facebook sẽ được tích hợp sau');
        });
    }
}

// Real-time validation
function setupRealTimeValidation() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const emailInput = document.getElementById('email');

    if (passwordInput) {
        passwordInput.addEventListener('input', () => {
            checkPasswordStrength(passwordInput.value);
            
            // Real-time confirm password validation
            if (confirmPasswordInput && confirmPasswordInput.value && passwordInput.value !== confirmPasswordInput.value) {
                showError(confirmPasswordInput, 'Mật khẩu xác nhận không khớp');
            } else if (confirmPasswordInput) {
                const error = confirmPasswordInput.parentNode.querySelector('.error-message');
                if (error) error.classList.remove('show');
                confirmPasswordInput.classList.remove('error');
            }
        });
    }

    if (confirmPasswordInput) {
        confirmPasswordInput.addEventListener('input', () => {
            if (passwordInput && passwordInput.value !== confirmPasswordInput.value) {
                showError(confirmPasswordInput, 'Mật khẩu xác nhận không khớp');
            } else {
                const error = confirmPasswordInput.parentNode.querySelector('.error-message');
                if (error) error.classList.remove('show');
                confirmPasswordInput.classList.remove('error');
            }
        });
    }

    if (emailInput) {
        emailInput.addEventListener('blur', () => {
            if (emailInput.value && !isValidEmail(emailInput.value)) {
                showError(emailInput, 'Email không hợp lệ');
            }
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupPasswordToggle();
    setupFormSubmission();
    setupSocialLogin();
    setupRealTimeValidation();
});