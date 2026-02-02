  
        // State management
        let currentUser = null;
        let cart = [];
        
        // New arrivals product data
        const newArrivals = [
            {
                id: 1,
                name: "Parisian Glow Foundation",
                category: "makeup",
                price: 4299,
                salePrice: 3869,
                image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                description: "Lightweight foundation with a natural, radiant finish that lasts all day. Our newest formula includes skincare benefits.",
                isNew: true,
                rating: 4.8,
                isOnSale: true
            },
            {
                id: 2,
                name: "Bloom Lipstick Collection",
                category: "makeup",
                price: 2899,
                image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
                description: "Set of 6 vibrant lipsticks with moisturizing formula and satin finish. Limited edition spring colors.",
                isNew: true,
                rating: 4.6,
                isOnSale: false
            },
            {
                id: 4,
                name: "Lavender Dream Perfume",
                category: "fragrance",
                price: 778,
                image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=744&q=80",
                description: "Elegant floral fragrance with notes of lavender, vanilla, and sandalwood. Our newest scent creation.",
                isNew: true,
                rating: 4.7,
                isOnSale: false
            },
            {
                id: 6,
                name: "Champagne Highlighter",
                category: "makeup",
                price: 249,
                salePrice: 19.99,
                image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80",
                description: "Liquid highlighter with champagne shimmer for a radiant glow. New vegan formula.",
                isNew: true,
                rating: 4.4,
                isOnSale: true
            },
            {
                id: 9,
                name: "French Vanilla Body Lotion",
                category: "body",
                price: 799,
                image: "Images/pr13.jpg",
                description: "Rich, creamy body lotion with French vanilla scent for silky smooth skin. New ultra-hydrating formula.",
                isNew: true,
                rating: 4.3,
                isOnSale: false
            },
            {
                id: 12,
                name: "Argan Oil Hair Serum",
                category: "haircare",
                price: 104,
                salePrice: 89,
                image: "Images/pr21.jpg",
                description: "Lightweight hair serum with argan oil to tame frizz and add shine. New heat-protectant formula.",
                isNew: true,
                rating: 4.7,
                isOnSale: true
            },
            {
                id: 14,
                name: "Overnight Repair Cream",
                category: "skincare",
                price: 899,
                image: "product1.jpg",
                description: "Intensive night cream that repairs skin while you sleep. New retinol alternative formula.",
                isNew: true,
                rating: 4.9,
                isOnSale: false
            },
            {
                id: 16,
                name: "Clay Detox Mask",
                category: "skincare",
                price: 1339,
                salePrice: 1039,
                image: "Images/pr18.jpg",
                description: "Purifying clay mask to deep clean pores and remove impurities. New charcoal-infused formula.",
                isNew: true,
                rating: 4.6,
                isOnSale: true
            },
            {
                id: 18,
                name: "Matte Lip Liner Set",
                category: "makeup",
                price: 24.00,
                image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
                description: "Set of 4 matte lip liners in versatile nude shades. New long-wearing formula.",
                isNew: true,
                rating: 4.3,
                isOnSale: false
            },
            {
                id: 20,
                name: "Sea Salt Body Scrub",
                category: "body",
                price: 399,
                image: "Images/produt6.jpg",
                description: "Exfoliating body scrub with sea salt and essential oils. New sustainable packaging.",
                isNew: true,
                rating: 4.7,
                isOnSale: false
            },
            {
                id: 22,
                name: "Vitamin C Brightening Serum",
                category: "skincare",
                price: 199,
                salePrice: 149,
                image: "Images/product4.jpg",
                description: "Potent vitamin C serum to brighten skin and reduce dark spots. New stabilized formula.",
                isNew: true,
                rating: 4.9,
                isOnSale: true
            },
            {
                id: 24,
                name: "Heat Protectant Spray",
                category: "haircare",
                price: 225,
                image: "Images/pr25.jpg",
                description: "Protective spray for hair before heat styling tools. New UV protection added.",
                isNew: true,
                rating: 4.4,
                isOnSale: false
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
        const newArrivalsGrid = document.getElementById('newArrivalsGrid');
        const exploreNewBtn = document.getElementById('exploreNewBtn');
        const shopNowBtn = document.getElementById('shopNowBtn');
        const newsletterForm = document.getElementById('newsletterForm');
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        
        // Countdown timer
        function updateCountdown() {
            // Set countdown end date (7 days from now)
            const countdownDate = new Date();
            countdownDate.setDate(countdownDate.getDate() + 7);
            
            const now = new Date().getTime();
            const distance = countdownDate - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            daysElement.textContent = days.toString().padStart(2, '0');
            hoursElement.textContent = hours.toString().padStart(2, '0');
            minutesElement.textContent = minutes.toString().padStart(2, '0');
            secondsElement.textContent = seconds.toString().padStart(2, '0');
            
            if (distance < 0) {
                clearInterval(countdownInterval);
                daysElement.textContent = '00';
                hoursElement.textContent = '00';
                minutesElement.textContent = '00';
                secondsElement.textContent = '00';
            }
        }
        
        // Initialize countdown
        let countdownInterval;
        
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
        
        // Wishlist state (persisted)
        let wishlist = [];
        function initWishlist() {
            const saved = localStorage.getItem('beautyBloomWishlist');
            wishlist = saved ? JSON.parse(saved) : [];
            updateWishlistCount();
        }
        function saveWishlist() {
            localStorage.setItem('beautyBloomWishlist', JSON.stringify(wishlist));
            updateWishlistCount();
        }
        function toggleWishlist(product, source = 'newarrival') {
            const idx = wishlist.findIndex(p => p.id === product.id && p.source === source);
            if (idx > -1) {
                wishlist.splice(idx, 1);
                saveWishlist();
                showNotification(`${product.name} removed from wishlist`);
            } else {
                const entry = { ...product, source };
                wishlist.push(entry);
                saveWishlist();
                showNotification(`${product.name} added to wishlist`);
            }
        }
        function updateWishlistCount() {
            const el = document.getElementById('wishlistCount');
            const count = wishlist.length;
            if (el) {
                el.textContent = count;
                el.style.display = count > 0 ? 'flex' : 'none';
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
                const product = newArrivals.find(p => p.id === item.id) || 
                               { name: "Product", price: 0, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" };
                
                const price = product.salePrice || product.price;
                total += price * item.quantity;
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-img">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${product.name}</div>
                        <div class="cart-item-price">₹${price.toFixed(2)} × ${item.quantity}</div>
                    </div>
                    <button class="cart-item-remove" data-id="${product.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                `;
                cartItems.appendChild(cartItem);
            });
            
            totalAmount.textContent = `₹${total.toFixed(2)}`;
            
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
            
            const product = newArrivals.find(p => p.id === productId);
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
            const product = newArrivals.find(p => p.id === productId);
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
        
        // Load new arrivals
        function loadNewArrivals() {
            newArrivalsGrid.innerHTML = '';
            
            newArrivals.forEach(product => {
                const productCard = createNewArrivalCard(product);
                newArrivalsGrid.appendChild(productCard);
            });
        }
        
        // Create new arrival card
        function createNewArrivalCard(product) {
            const productCard = document.createElement('div');
            productCard.className = 'new-arrival-card';
            
            const categoryName = product.category.charAt(0).toUpperCase() + product.category.slice(1);
            const saleBadge = product.isOnSale ? '<div class="sale-badge">Sale</div>' : '';
            const priceDisplay = product.isOnSale 
                ? `<span class="old-price">₹${product.price.toFixed(2)}</span> <span class="new-arrival-price">₹${product.salePrice.toFixed(2)}</span>`
                : `<span class="new-arrival-price">₹${product.price.toFixed(2)}</span>`;
            
            productCard.innerHTML = `
                <div class="new-arrival-badge">New</div>
                ${saleBadge}
                <div class="new-arrival-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="new-arrival-info">
                    <div class="new-arrival-category">${categoryName}</div>
                    <h3 class="new-arrival-name">${product.name}</h3>
                    <div class="new-arrival-description">${product.description}</div>
                    <div class="new-arrival-price">${priceDisplay}</div>
                    <div class="new-arrival-actions">
                        <button class="new-arrival-btn add-to-cart" data-id="${product.id}">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                        <button class="new-arrival-btn wishlist-btn" data-id="${product.id}">
                            <i class="far fa-heart"></i> Wishlist
                        </button>
                    </div>
                    <div class="login-required-note">${currentUser ? '' : 'Login required to purchase'}</div>
                </div>
            `;
            
            // Make the product card clickable to show details (exclude action buttons)
            productCard.style.cursor = 'pointer';
            productCard.addEventListener('click', function(e) {
                if (e.target.closest('.add-to-cart') || e.target.closest('.wishlist-btn')) return;
                showProductModal(product);
            });
            
            return productCard;
        }
        
        // Show product detail modal
        function showProductModal(product) {
            const modal = document.createElement('div');
            modal.style.cssText = 'position: fixed; top:0; left:0; width:100%; height:100%; display:flex; justify-content:center; align-items:center; background-color: rgba(0,0,0,0.6); z-index: 4000;';
            modal.innerHTML = `
                <div style="background:#fff; padding:20px; max-width:900px; width:92%; border-radius:10px; position:relative;">
                    <button class="close-product-modal" aria-label="Close" style="position:absolute; top:10px; right:12px; font-size:28px; border:none; background:none; cursor:pointer;">&times;</button>
                    <div style="display:flex; gap:20px; align-items:flex-start; flex-wrap:wrap;">
                        <div style="flex:1; min-width:240px;">
                            <img src="${product.image}" alt="${product.name}" style="width:100%; border-radius:8px;">
                        </div>
                        <div style="flex:1; min-width:240px;">
                            <h2 style="margin-top:0;">${product.name}</h2>
                            <p style="color:#555;">${product.description}</p>
                            <p><strong>Price:</strong> ₹${(product.salePrice || product.price).toFixed(2)}</p>
                            <p><strong>Rating:</strong> ${product.rating} / 5</p>
                            <div style="margin-top:15px; display:flex; gap:10px;">
                                <button class="modal-add-to-cart new-arrival-btn"> <i class="fas fa-shopping-cart"></i> Add to Cart</button>
                                <button class="modal-wishlist new-arrival-btn"> <i class="far fa-heart"></i> Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);

            // Elements and handlers
            const closeBtn = modal.querySelector('.close-product-modal');
            const addBtn = modal.querySelector('.modal-add-to-cart');
            const wishBtn = modal.querySelector('.modal-wishlist');

            function closeModal() {
                document.removeEventListener('keydown', onKeyDown);
                if (document.body.contains(modal)) document.body.removeChild(modal);
            }

            function onKeyDown(e) { if (e.key === 'Escape') closeModal(); }
            document.addEventListener('keydown', onKeyDown);

            closeBtn.addEventListener('click', closeModal);
            modal.addEventListener('click', function(e) { if (e.target === modal) closeModal(); });

            addBtn.addEventListener('click', function() {
                addToCart(product.id);
                showNotification(`${product.name} added to cart!`);
                closeModal();
            });

            wishBtn.addEventListener('click', function() {
                if (currentUser) {
                    showNotification(`${product.name} added to your wishlist!`);
                } else {
                    closeModal();
                    showLoginRequiredModal();
                }
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
                alert(`Thank you for your order, ${currentUser.name.split(' ')[0]}! Your order total is ${totalAmount.textContent}.\n\nOrder placed successfully! Your items will be shipped within 3-5 business days.`);
                
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
                total: parseFloat(totalAmount.textContent.replace(/[^0-9.-]+/g, ''))
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
        
        // Explore new arrivals button
        exploreNewBtn.addEventListener('click', () => {
            document.getElementById('newArrivalsGrid').scrollIntoView({ behavior: 'smooth' });
        });
        
        // Shop now button
        shopNowBtn.addEventListener('click', () => {
            document.getElementById('newArrivalsGrid').scrollIntoView({ behavior: 'smooth' });
        });
        
        // Newsletter form submission
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('.newsletter-input');
            const email = emailInput.value;
            
            if (email) {
                showNotification(`Thank you for subscribing with ${email}! You'll be the first to know about new arrivals.`);
                emailInput.value = '';
            }
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
                
                // Reload new arrivals to update login required notes
                loadNewArrivals();
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
            
            // Reload new arrivals to update login required notes
            loadNewArrivals();
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
        
        // Event delegation for product buttons
        document.addEventListener('click', function(e) {
            // Add to cart buttons
            if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
                const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
                const productId = parseInt(button.getAttribute('data-id'));
                addToCart(productId);
            }
            
            // Wishlist buttons
            if (e.target.classList.contains('wishlist-btn') || e.target.closest('.wishlist-btn')) {
                const button = e.target.classList.contains('wishlist-btn') ? e.target : e.target.closest('.wishlist-btn');
                const productId = parseInt(button.getAttribute('data-id'));
                const product = newArrivals.find(p => p.id === productId);

                if (product) {
                    toggleWishlist(product, 'newarrival');
                }
            }
        });
        
        // Initialize page
        document.addEventListener('DOMContentLoaded', () => {
            initCart();
            initUser();
            initWishlist();
            updateCartSidebar();
            loadNewArrivals();
            
            // Start countdown timer
            updateCountdown();
            countdownInterval = setInterval(updateCountdown, 1000);

            const wishlistIcon = document.getElementById('wishlistIcon');
            if (wishlistIcon) wishlistIcon.addEventListener('click', () => window.location.href = 'wishlist.html');
        });