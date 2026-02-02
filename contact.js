
        // State management
        let currentUser = null;
        let cart = [];
        
        // Demo product data for cart
        const demoProducts = [
            {
                id: 1,
                name: "Parisian Glow Foundation",
                category: "Makeup",
                price: 42.99,
                image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            },
            {
                id: 2,
                name: "Bloom Lipstick Collection",
                category: "Makeup",
                price: 28.50,
                image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80"
            }
        ];

        // DOM Elements
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');
        const cartIcon = document.getElementById('cartIcon');
        const cartSidebar = document.getElementById('cartSidebar');
        const closeCart = document.getElementById('closeCart');
        const overlay = document.getElementById('overlay');
        const cartCount = document.getElementById('cartCount');
        const cartItems = document.getElementById('cartItems');
        const cartEmpty = document.getElementById('cartEmpty');
        const cartLoginRequired = document.getElementById('cartLoginRequired');
        const cartTotal = document.getElementById('cartTotal');
        const totalAmount = document.getElementById('totalAmount');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const loginBtn = document.getElementById('loginBtn');
        const userInfo = document.getElementById('userInfo');
        const userAvatar = document.getElementById('userAvatar');
        const userName = document.getElementById('userName');
        const loginRequiredModal = document.getElementById('loginRequiredModal');
        const loginFromModalBtn = document.getElementById('loginFromModalBtn');
        const closeLoginModalBtn = document.getElementById('closeLoginModalBtn');
        const loginFromCartBtn = document.getElementById('loginFromCartBtn');
        const contactForm = document.getElementById('contactForm');
        const faqItems = document.querySelectorAll('.faq-item');
        
        // Initialize cart from localStorage
        function initCart() {
            const savedCart = localStorage.getItem('beautyBloomCart');
            if (savedCart) {
                cart = JSON.parse(savedCart);
                updateCartCount();
            }
        }
        
        // Initialize user from localStorage
        function initUser() {
            const savedUser = localStorage.getItem('beautyBloomUser');
            if (savedUser) {
                currentUser = JSON.parse(savedUser);
                updateUserUI();
                updateCartSidebar();
            }
        }
        
        // Save cart to localStorage
        function saveCart() {
            localStorage.setItem('beautyBloomCart', JSON.stringify(cart));
        }
        
        // Save user to localStorage
        function saveUser() {
            if (currentUser) {
                localStorage.setItem('beautyBloomUser', JSON.stringify(currentUser));
            } else {
                localStorage.removeItem('beautyBloomUser');
            }
        }
        
        // Update cart count in header
        function updateCartCount() {
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
        }
        
        // Update cart sidebar based on login status
        function updateCartSidebar() {
            cartItems.innerHTML = '';
            
            if (!currentUser) {
                // User not logged in
                cartEmpty.style.display = 'none';
                cartLoginRequired.style.display = 'block';
                cartTotal.style.display = 'none';
                checkoutBtn.style.display = 'none';
                return;
            }
            
            // User is logged in
            cartLoginRequired.style.display = 'none';
            
            if (cart.length === 0) {
                cartEmpty.style.display = 'block';
                cartTotal.style.display = 'none';
                checkoutBtn.style.display = 'none';
                return;
            }
            
            cartEmpty.style.display = 'none';
            cartTotal.style.display = 'flex';
            checkoutBtn.style.display = 'block';
            
            let total = 0;
            
            cart.forEach(item => {
                const product = demoProducts.find(p => p.id === item.id);
                if (product) {
                    total += product.price * item.quantity;
                    
                    const cartItem = document.createElement('div');
                    cartItem.className = 'cart-item';
                    cartItem.innerHTML = `
                        <div class="cart-item-img">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="cart-item-info">
                            <div class="cart-item-name">${product.name}</div>
                            <div class="cart-item-price">$${product.price.toFixed(2)} × ${item.quantity}</div>
                        </div>
                        <button class="cart-item-remove" data-id="${product.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    `;
                    cartItems.appendChild(cartItem);
                }
            });
            
            totalAmount.textContent = `$${total.toFixed(2)}`;
            
            // Add event listeners to remove buttons
            document.querySelectorAll('.cart-item-remove').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    removeFromCart(productId);
                });
            });
        }
        
        // Add product to cart (only if logged in)
        function addToCart(productId) {
            // Check if user is logged in
            if (!currentUser) {
                showLoginRequiredModal();
                return;
            }
            
            const product = demoProducts.find(p => p.id === productId);
            if (!product) return;
            
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ id: productId, quantity: 1 });
            }
            
            updateCartCount();
            updateCartSidebar();
            saveCart();
            
            // Show notification
            showNotification(`${product.name} added to cart!`);
        }
        
        // Remove product from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartCount();
            updateCartSidebar();
            saveCart();
            
            // Show notification
            const product = demoProducts.find(p => p.id === productId);
            if (product) {
                showNotification(`${product.name} removed from cart`);
            }
        }
        
        // Show notification
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background-color: var(--success);
                color: white;
                padding: 15px 25px;
                border-radius: 8px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                z-index: 3000;
                animation: slideIn 0.3s ease;
            `;
            
            notification.innerHTML = `
                <i class="fas fa-check-circle" style="margin-right: 10px;"></i>
                ${message}
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
            
            // Add animation styles
            if (!document.querySelector('#notificationStyles')) {
                const style = document.createElement('style');
                style.id = 'notificationStyles';
                style.textContent = `
                    @keyframes slideIn {
                        from { transform: translateX(100%); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                    @keyframes slideOut {
                        from { transform: translateX(0); opacity: 1; }
                        to { transform: translateX(100%); opacity: 0; }
                    }
                `;
                document.head.appendChild(style);
            }
        }
        
        // Show login required modal
        function showLoginRequiredModal() {
            loginRequiredModal.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        // Close login required modal
        function closeLoginRequiredModal() {
            loginRequiredModal.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        // Update user UI after login
        function updateUserUI() {
            if (currentUser) {
                // Update header
                userInfo.style.display = 'flex';
                loginBtn.style.display = 'none';
                userName.textContent = currentUser.name;
                userAvatar.textContent = currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase();
                
                // Update cart sidebar
                updateCartSidebar();
            } else {
                // Update header
                userInfo.style.display = 'none';
                loginBtn.style.display = 'block';
                
                // Update cart sidebar
                updateCartSidebar();
            }
        }
        
        // FAQ functionality
        function initFAQ() {
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                question.addEventListener('click', () => {
                    // Close all other FAQ items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle current item
                    item.classList.toggle('active');
                });
            });
        }
        
        // Mobile menu toggle
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
        
        // Cart sidebar functionality
        cartIcon.addEventListener('click', () => {
            cartSidebar.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeCart.addEventListener('click', closeCartSidebar);
        overlay.addEventListener('click', closeCartSidebar);
        
        function closeCartSidebar() {
            cartSidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        // Checkout button
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) return;
            
            if (currentUser) {
                alert(`Thank you for your order, ${currentUser.name.split(' ')[0]}! Your order total is $${totalAmount.textContent.substring(1)}.\n\nOrder placed successfully! Your items will be shipped within 3-5 business days.`);
                
                // Save order to user's order history
                saveOrderToHistory();
                
                // Clear cart after order
                cart = [];
                updateCartCount();
                updateCartSidebar();
                saveCart();
                closeCartSidebar();
            } else {
                showLoginRequiredModal();
            }
        });
        
        // Save order to user's order history
        function saveOrderToHistory() {
            if (!currentUser) return;
            
            const order = {
                id: Date.now(),
                date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
                items: [...cart],
                total: parseFloat(totalAmount.textContent.substring(1))
            };
            
            // Get existing orders from localStorage
            let userOrders = JSON.parse(localStorage.getItem(`beautyBloomOrders_${currentUser.email}`)) || [];
            
            // Add new order
            userOrders.unshift(order);
            
            // Keep only last 5 orders
            if (userOrders.length > 5) {
                userOrders = userOrders.slice(0, 5);
            }
            
            // Save back to localStorage
            localStorage.setItem(`beautyBloomOrders_${currentUser.email}`, JSON.stringify(userOrders));
        }
        
        // Contact form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            // For demo purposes, we'll just show a success message
            
            showNotification(`Thank you for your message, ${firstName}! We'll get back to you within 24 hours.`);
            
            // Reset form
            this.reset();
        });
        
        // Login functionality
        function showLoginModal() {
            const loginModal = document.createElement('div');
            loginModal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
            `;
            
            loginModal.innerHTML = `
                <div style="background-color: white; padding: 40px; border-radius: 15px; max-width: 400px; width: 90%;">
                    <h2 style="color: var(--dark); margin-bottom: 20px;">Login to Beauty & Bloom</h2>
                    <form id="loginForm">
                        <div class="form-group">
                            <label for="loginName">Full Name</label>
                            <input type="text" id="loginName" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="loginEmail">Email Address</label>
                            <input type="email" id="loginEmail" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="loginPassword">Password</label>
                            <input type="password" id="loginPassword" class="form-control" required value="password">
                        </div>
                        <div style="display: flex; gap: 10px; margin-top: 30px;">
                            <button type="submit" class="login-btn" style="flex: 1;">Login</button>
                            <button type="button" id="closeLogin" class="login-btn" style="flex: 1; background-color: #ddd; color: var(--dark);">Close</button>
                        </div>
                        <p style="margin-top: 15px; font-size: 14px; color: #666; text-align: center;">
                            Use any name and email. Password is "password"
                        </p>
                    </form>
                </div>
            `;
            
            document.body.appendChild(loginModal);
            
            // Close login modal
            document.getElementById('closeLogin').addEventListener('click', () => {
                document.body.removeChild(loginModal);
            });
            
            // Login form submission
            document.getElementById('loginForm').addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('loginName').value;
                const email = document.getElementById('loginEmail').value;
                const password = document.getElementById('loginPassword').value;
                
                if (password !== 'password') {
                    alert('Invalid password. Please use "password"');
                    return;
                }
                
                if (!name || !email) {
                    alert('Please enter your name and email');
                    return;
                }
                
                currentUser = {
                    name: name,
                    email: email,
                    joined: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
                };
                
                updateUserUI();
                saveUser();
                showNotification(`Welcome to Beauty & Bloom, ${name.split(' ')[0]}! You can now add items to cart and place orders.`);
                
                // Close both modals
                document.body.removeChild(loginModal);
                closeLoginRequiredModal();
            });
            
            // Close modal when clicking outside
            loginModal.addEventListener('click', function(e) {
                if(e.target === this) {
                    document.body.removeChild(loginModal);
                }
            });
            
            // Set default values for demo
            setTimeout(() => {
                document.getElementById('loginName').value = 'Jane Doe';
                document.getElementById('loginEmail').value = 'jane@example.com';
            }, 100);
        }
        
        // Logout functionality
        function logout() {
            currentUser = null;
            updateUserUI();
            saveUser();
            showNotification('You have been logged out.');
        }
        
        // Add logout functionality to user avatar
        userInfo.addEventListener('click', () => {
            const logoutConfirm = confirm('Are you sure you want to logout?');
            if (logoutConfirm) {
                logout();
            }
        });
        
        // Login button event
        loginBtn.addEventListener('click', showLoginModal);
        
        // Login from modal button
        loginFromModalBtn.addEventListener('click', () => {
            closeLoginRequiredModal();
            showLoginModal();
        });
        
        // Login from cart button
        loginFromCartBtn.addEventListener('click', () => {
            closeCartSidebar();
            showLoginModal();
        });
        
        // Close login modal button
        closeLoginModalBtn.addEventListener('click', closeLoginRequiredModal);
        
        // Initialize page
        document.addEventListener('DOMContentLoaded', () => {
            initCart();
            initUser();
            updateCartSidebar();
            initFAQ();
            
            // Add some demo items to cart for showcase
            if (cart.length === 0) {
                // Add a couple of demo items to cart for demonstration
                setTimeout(() => {
                    addToCart(1);
                    addToCart(2);
                }, 500);
            }
        });