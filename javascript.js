
        const simpleProducts = [
            {
                id: 1,
                name: "Rose Quartz Facial Serum",
                price: 42.99,
                image: "https://images.unsplash.com/photo-1556228578-9c360e1d8d34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 2,
                name: "Hyaluronic Acid Moisturizer",
                price: 38.50,
                image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 3,
                name: "Vitamin C Brightening Cream",
                price: 52.75,
                image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 4,
                name: "Charcoal Detox Mask",
                price: 28.99,
                image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }
        ];
        
        // Load wishlist from localStorage
        let wishlist = JSON.parse(localStorage.getItem('simpleWishlist')) || [];
        
        // DOM elements
        const wishlistIcon = document.getElementById('wishlistIcon');
        const wishlistCount = document.getElementById('wishlistCount');
        const simpleProductsGrid = document.getElementById('simpleProductsGrid');
        
        // Existing elements
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');
        const loginBtn = document.getElementById('loginBtn');
        const cartIcon = document.getElementById('cartIcon');
        const cartCount = document.getElementById('cartCount');
        const userInfo = document.getElementById('userInfo');
        const userAvatar = document.getElementById('userAvatar');
        const userName = document.getElementById('userName');

        // Helper: ensure per-user carts and sync to shared keys
        function ensureUserCarts(email) {
            const keySimple = `simpleCart_${email}`;
            const keyFull = `beautyBloomCart_${email}`;
            if (!localStorage.getItem(keySimple)) localStorage.setItem(keySimple, JSON.stringify([]));
            if (!localStorage.getItem(keyFull)) localStorage.setItem(keyFull, JSON.stringify([]));
        }

        function syncUserCartsToShared(email) {
            const keySimple = `simpleCart_${email}`;
            const keyFull = `beautyBloomCart_${email}`;
            localStorage.setItem('simpleCart', localStorage.getItem(keySimple) || JSON.stringify([]));
            localStorage.setItem('beautyBloomCart', localStorage.getItem(keyFull) || JSON.stringify([]));
        }

        function clearSharedCarts() {
            localStorage.setItem('simpleCart', JSON.stringify([]));
            localStorage.setItem('beautyBloomCart', JSON.stringify([]));
        }
        
        // Initialize simple wishlist
        function initSimpleWishlist() {
            updateWishlistCount();
            renderSimpleProducts();
            
            // Check if user is logged in from localStorage
            const savedUser = localStorage.getItem('beautyBloomUser');
            if (savedUser) {
                const user = JSON.parse(savedUser);
                if (userInfo) userInfo.style.display = 'flex';
                if (loginBtn) loginBtn.style.display = 'none';
                if (userName) userName.textContent = user.name;
                if (userAvatar) userAvatar.textContent = user.name.split(' ').map(n => n[0]).join('').toUpperCase();
            }
        }
        
        // Update wishlist count
        function updateWishlistCount() {
            const count = wishlist.length;
            wishlistCount.textContent = count;
            wishlistCount.style.display = count > 0 ? 'flex' : 'none';
        }
        
        // Render simple products
        function renderSimpleProducts() {
            if (!simpleProductsGrid) return;
            
            simpleProductsGrid.innerHTML = '';
            
            simpleProducts.forEach(product => {
                const isInWishlist = wishlist.some(item => item.id === product.id);
                
                const productCard = document.createElement('div');
                productCard.className = 'simple-product-card';
                productCard.dataset.id = product.id;
                
                productCard.innerHTML = `
                    <div class="simple-product-img">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="simple-product-info">
                        <div class="simple-product-name">${product.name}</div>
                        <div class="simple-product-price">$${product.price.toFixed(2)}</div>
                        <div class="simple-product-actions">
                            <button class="wishlist-heart ${isInWishlist ? 'active' : ''}" data-id="${product.id}">
                                <i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i>
                            </button>
                            <button class="simple-add-to-cart" data-id="${product.id}">Add to Cart</button>
                        </div>
                    </div>
                `;
                
                simpleProductsGrid.appendChild(productCard);
            });
        }
        
        // Toggle item in wishlist
        function toggleWishlist(productId) {
            const product = simpleProducts.find(p => p.id === productId);
            const isInWishlist = wishlist.some(item => item.id === productId);
            
            if (isInWishlist) {
                // Remove from wishlist
                wishlist = wishlist.filter(item => item.id !== productId);
                alert(`Removed "${product.name}" from wishlist`);
            } else {
                // Add to wishlist
                wishlist.push(product);
                alert(`Added "${product.name}" to wishlist`);
            }
            
            // Save to localStorage
            localStorage.setItem('simpleWishlist', JSON.stringify(wishlist));
            
            // Update UI
            updateWishlistCount();
            renderSimpleProducts();
        }

        // Cart helpers
        function getSimpleCart() {
            const user = JSON.parse(localStorage.getItem('beautyBloomUser') || 'null');
            if (user && user.email) {
                return JSON.parse(localStorage.getItem(`simpleCart_${user.email}`) || '[]');
            }
            return JSON.parse(localStorage.getItem('simpleCart') || '[]');
        }
        function saveSimpleCart(cart) {
            const user = JSON.parse(localStorage.getItem('beautyBloomUser') || 'null');
            if (user && user.email) {
                localStorage.setItem(`simpleCart_${user.email}`, JSON.stringify(cart));
            }
            localStorage.setItem('simpleCart', JSON.stringify(cart));
        }
        function updateCartCount() {
            const userExists = !!localStorage.getItem('beautyBloomUser');
            if (!userExists) {
                // Visitors should see an empty cart (0) even if a demo cart exists in storage
                if (cartCount) {
                    cartCount.textContent = 0;
                    cartCount.style.display = 'none';
                }
                return;
            }

            const cart = getSimpleCart();
            const total = cart.reduce((s, i) => s + i.quantity, 0);
            if (cartCount) {
                cartCount.textContent = total;
                cartCount.style.display = total > 0 ? 'flex' : 'none';
            }
        }

        // Add to cart and show mini-cart modal
        function addToCart(productId) {
            const product = simpleProducts.find(p => p.id === productId);
            if (!product) return;
            let cart = getSimpleCart();
            const existing = cart.find(i => i.id === productId);
            if (existing) existing.quantity += 1; else cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
            saveSimpleCart(cart);
            updateCartCount();
            showMiniCartModal();
        }

        function showMiniCartModal() {
            const existing = document.getElementById('miniCartModal');
            if (existing) return; // already open
            const cart = getSimpleCart();
            const modal = document.createElement('div');
            modal.id = 'miniCartModal';
            modal.className = 'mini-cart-modal';
            const itemsHtml = cart.map(i => `<div class="mini-cart-item"><div>${i.name} <small style=\"color:#777;font-weight:600\">×${i.quantity}</small></div><div>$${(i.price*i.quantity).toFixed(2)}</div></div>`).join('');
            const total = cart.reduce((s,i) => s + i.price*i.quantity, 0);
            modal.innerHTML = `
                <div class="mini-cart-content" role="dialog" aria-modal="true">
                    <h3 style="margin-top:0">Your Cart</h3>
                    <div>${itemsHtml || '<div style="color:#777">Your cart is empty.</div>'}</div>
                    <div class="mini-cart-total"><div>Total</div><div>$${total.toFixed(2)}</div></div>
                    <div class="mini-cart-actions">
                        <button class="btn-secondary" id="continueShopping">Continue</button>
                        <button class="btn-primary" id="proceedToPayment">Proceed to Payment</button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
            modal.querySelector('#continueShopping').addEventListener('click', () => modal.remove());
            modal.querySelector('#proceedToPayment').addEventListener('click', () => { window.location.href = 'checkout.html'; });
            modal.addEventListener('click', function(e) { if (e.target === modal) modal.remove(); });
        }

        // Wishlist icon click - show wishlist items
        if (wishlistIcon) {
            wishlistIcon.addEventListener('click', function() {
                if (wishlist.length === 0) {
                    alert('Your wishlist is empty. Add some products to your wishlist first!');
                } else {
                    let message = 'Your Wishlist:\n\n';
                    wishlist.forEach(item => {
                        message += `• ${item.name} - $${item.price.toFixed(2)}\n`;
                    });
                    message += `\nTotal items: ${wishlist.length}`;
                    alert(message);
                }
            });
        }
        
        // Event delegation for product interactions
        document.addEventListener('click', function(e) {
            // Wishlist heart button
            if (e.target.closest('.wishlist-heart')) {
                const heartBtn = e.target.closest('.wishlist-heart');
                const productId = parseInt(heartBtn.dataset.id);
                toggleWishlist(productId);
            }
            
            // Add to cart button
            if (e.target.closest('.simple-add-to-cart')) {
                const addToCartBtn = e.target.closest('.simple-add-to-cart');
                const productId = parseInt(addToCartBtn.dataset.id);
                addToCart(productId);
            }
        });
        
        // Explore button
        const exploreBtn = document.getElementById('exploreBtn');
        if (exploreBtn) {
            exploreBtn.addEventListener('click', function() {
                document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            });
        }
        
        // Existing script (unchanged)
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

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({ top: targetElement.offsetTop - 70, behavior: 'smooth' });
                }
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });

        // Cart icon: open mini-cart modal when items exist, otherwise show empty notice
        if (cartIcon) {
            cartIcon.addEventListener('click', () => {
                const userExists = !!localStorage.getItem('beautyBloomUser');
                if (!userExists) {
                    alert('Please login to view your cart.');
                    return;
                }

                const cart = getSimpleCart();
                if (!cart.length) {
                    alert('Your cart is empty. Add items to proceed to checkout.');
                    return;
                }
                showMiniCartModal();
            });
        }

        // Show an improved Login / Sign up modal with password handling
        function showLoginModal(defaultMode) {
            const modal = document.createElement('div');
            modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:3000';
            modal.innerHTML = `
                <div style="background:#fff;padding:20px;border-radius:12px;max-width:480px;width:96%;">
                    <div style="display:flex;gap:10px;margin-bottom:12px;">
                        <button id="authLoginBtn" class="cta-btn" style="flex:1">Login</button>
                        <button id="authSignupBtn" class="product-btn" style="flex:1">Sign up</button>
                    </div>
                    <form id="authForm">
                        <div style="margin-bottom:10px;display:none" id="authNameWrap"><input id="authName" class="form-control" placeholder="Full name"></div>
                        <div style="margin-bottom:10px"><input id="authEmail" type="email" class="form-control" placeholder="Email" required></div>
                        <div style="margin-bottom:10px"><input id="authPassword" type="password" class="form-control" placeholder="Password" required></div>
                        <div style="display:flex;gap:10px;margin-top:12px">
                            <button type="submit" class="cta-btn" id="authSubmit" style="flex:1">Login</button>
                            <button type="button" id="closeAuth" class="product-btn" style="flex:1">Close</button>
                        </div>
                        <p id="authNote" style="margin-top:12px;font-size:13px;color:#666">Use the sign up tab to create a new account.</p>
                    </form>
                </div>
            `;

            document.body.appendChild(modal);

            const authLoginBtn = modal.querySelector('#authLoginBtn');
            const authSignupBtn = modal.querySelector('#authSignupBtn');
            const authNameWrap = modal.querySelector('#authNameWrap');
            const authSubmit = modal.querySelector('#authSubmit');
            const authNote = modal.querySelector('#authNote');
            let mode = 'login';

            function setMode(m) {
                mode = m;
                if (m === 'login') {
                    authLoginBtn.classList.add('cta-btn');
                    authLoginBtn.classList.remove('product-btn');
                    authSignupBtn.classList.remove('cta-btn');
                    authSignupBtn.classList.add('product-btn');
                    authNameWrap.style.display = 'none';
                    authSubmit.textContent = 'Login';
                    authNote.textContent = 'Enter your email and password to login.';
                } else {
                    authSignupBtn.classList.add('cta-btn');
                    authSignupBtn.classList.remove('product-btn');
                    authLoginBtn.classList.remove('cta-btn');
                    authLoginBtn.classList.add('product-btn');
                    authNameWrap.style.display = 'block';
                    authSubmit.textContent = 'Sign up';
                    authNote.textContent = 'Create an account by providing name, email and password.';
                }
            }

            authLoginBtn.addEventListener('click', () => setMode('login'));
            authSignupBtn.addEventListener('click', () => setMode('signup'));

            modal.querySelector('#closeAuth').addEventListener('click', () => document.body.removeChild(modal));

            modal.querySelector('#authForm').addEventListener('submit', function(e) {
                e.preventDefault();
                const email = modal.querySelector('#authEmail').value.trim().toLowerCase();
                const password = modal.querySelector('#authPassword').value;
                if (!email || !password) { alert('Please enter email and password'); return; }

                // Load users map from localStorage (email -> {name,email,password})
                let users = {};
                try { users = JSON.parse(localStorage.getItem('beautyBloomUsers')) || {}; } catch (err) { users = {}; }

                if (mode === 'signup') {
                    const name = modal.querySelector('#authName').value.trim();
                    if (!name) { alert('Please enter your full name'); return; }
                    if (users[email]) { alert('An account with this email already exists. Please login.'); return; }

                        // Save new user (for demo only - do not store plain passwords in production)
                    users[email] = { name, email, password };
                    localStorage.setItem('beautyBloomUsers', JSON.stringify(users));

                    // Set current user
                    localStorage.setItem('beautyBloomUser', JSON.stringify({ name, email }));

                    // Create empty per-user carts and clear shared guest carts so new user starts with 0
                    ensureUserCarts(email);
                    syncUserCartsToShared(email);

                    if (userInfo) userInfo.style.display = 'flex';
                    if (loginBtn) loginBtn.style.display = 'none';
                    if (userName) userName.textContent = name;
                    if (userAvatar) userAvatar.textContent = name.split(' ').map(n => n[0]).join('').toUpperCase();

                    // Notify other modules/pages to reload user/cart state
                    window.dispatchEvent(new Event('bb:auth-changed'));

                    alert(`Welcome, ${name.split(' ')[0]}! Your account has been created.`);
                    document.body.removeChild(modal);
                } else {
                    const userRecord = users[email];
                    if (!userRecord) { alert('No account found for this email. Please sign up.'); return; }
                    if (userRecord.password !== password) { alert('Incorrect password.'); return; }

                    localStorage.setItem('beautyBloomUser', JSON.stringify({ name: userRecord.name, email }));

                    // Ensure per-user cart exists and sync it to shared keys so other modules can read the cart for this user
                    ensureUserCarts(email);
                    syncUserCartsToShared(email);

                    if (userInfo) userInfo.style.display = 'flex';
                    if (loginBtn) loginBtn.style.display = 'none';
                    if (userName) userName.textContent = userRecord.name;
                    if (userAvatar) userAvatar.textContent = userRecord.name.split(' ').map(n => n[0]).join('').toUpperCase();

                    // Notify other modules/pages to reload user/cart state
                    window.dispatchEvent(new Event('bb:auth-changed'));

                    alert(`Welcome back, ${userRecord.name.split(' ')[0]}!`);
                    document.body.removeChild(modal);
                }
            });

            // close on outside click
            modal.addEventListener('click', function(e) { if (e.target === modal) document.body.removeChild(modal); });

            // default mode
            setMode(defaultMode || 'login');
        }

        if (loginBtn) loginBtn.addEventListener('click', () => showLoginModal());

        // User avatar click: show profile dropdown with Profile / Logout
        function toggleProfileDropdown() {
            // remove existing dropdown if present
            const existing = document.getElementById('profileDropdown');
            if (existing) { existing.remove(); document.removeEventListener('click', closeProfileDropdown); return; }

            const dropdown = document.createElement('div');
            dropdown.id = 'profileDropdown';
            dropdown.className = 'profile-dropdown';
            dropdown.innerHTML = `
                <button class="profile-option" id="openProfile">Your Profile</button>
                <button class="profile-option" id="logoutBtn">Logout</button>
            `;

            const headerActions = document.querySelector('.header-actions');
            headerActions.appendChild(dropdown);

            // Event handlers
            dropdown.querySelector('#openProfile').addEventListener('click', () => { openProfileModal(); dropdown.remove(); });
            dropdown.querySelector('#logoutBtn').addEventListener('click', () => { logoutUser(); dropdown.remove(); });

            // close dropdown when clicking outside
            setTimeout(() => document.addEventListener('click', closeProfileDropdown));
        }

        function closeProfileDropdown(e) {
            const dropdown = document.getElementById('profileDropdown');
            if (!dropdown) { document.removeEventListener('click', closeProfileDropdown); return; }
            if (e && (e.target.closest('#profileDropdown') || e.target.closest('#userInfo'))) return;
            dropdown.remove();
            document.removeEventListener('click', closeProfileDropdown);
        }

        function logoutUser() {
            if (!confirm('Are you sure you want to logout?')) return;
            localStorage.removeItem('beautyBloomUser');

            // Clear shared guest carts so next visitor doesn't see previous items
            clearSharedCarts();

            if (userInfo) userInfo.style.display = 'none';
            if (loginBtn) loginBtn.style.display = 'block';

            // Notify other modules/pages to reload user/cart state
            window.dispatchEvent(new Event('bb:auth-changed'));

            alert('You have been logged out.');
        }

        function openProfileModal() {
            const savedUser = JSON.parse(localStorage.getItem('beautyBloomUser'));
            if (!savedUser) { alert('No user is logged in.'); return; }

            // Prepare data
            const wishlistItems = JSON.parse(localStorage.getItem('simpleWishlist')) || [];
            const orders = JSON.parse(localStorage.getItem(`beautyBloomOrders_${savedUser.email}`)) || [];

            // Build modal
            const modal = document.createElement('div');
            modal.id = 'profileModal';
            modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000';

            modal.innerHTML = `
                <div class="profile-modal-content">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
                        <h3 style="margin:0">${savedUser.name}'s Profile</h3>
                        <button id="closeProfileModal" class="small-btn">Close</button>
                    </div>

                    <div class="profile-section">
                        <h4>Account</h4>
                        <div><strong>Name:</strong> ${savedUser.name}</div>
                        <div><strong>Email:</strong> ${savedUser.email}</div>
                    </div>

                    <div class="profile-section">
                        <h4>Wishlist (${wishlistItems.length})</h4>
                        <div id="profileWishlistList">
                            ${wishlistItems.length ? wishlistItems.map(i => `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #f5f5f5"><div>${i.name} — <strong>$${i.price.toFixed(2)}</strong></div><button class=\"small-btn remove-wl\" data-id=\"${i.id}\">Remove</button></div>`).join('') : '<div style="color:#777">No items in wishlist.</div>'}
                        </div>
                    </div>

                    <div class="profile-section">
                        <h4>Recent Orders (${orders.length})</h4>
                        <div id="profileOrdersList">
                            ${orders.length ? orders.map(o => `<div style="padding:8px 0;border-bottom:1px solid #f5f5f5"><div style="font-weight:600">Order #${o.id} — ${o.date}</div><div>${o.items.map(it => `• ${it.quantity} × ${ (function(){ const p = (window.allProducts||[]).find(pp=>pp.id===it.id); return p? p.name : ('Product '+it.id) })()}`).join('<br>')}</div><div style="margin-top:6px;font-weight:700;color:var(--accent)">Total: $${o.total.toFixed(2)}</div></div>`).join('') : '<div style="color:#777">No recent orders.</div>'}
                        </div>
                    </div>
                </div>
            `;

            document.body.appendChild(modal);

            // Close handlers
            modal.querySelector('#closeProfileModal').addEventListener('click', () => document.body.removeChild(modal));
            modal.addEventListener('click', function(e) { if (e.target === modal) document.body.removeChild(modal); });

            // Remove wishlist item from modal
            modal.querySelectorAll('.remove-wl').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.getAttribute('data-id'));
                    let wl = JSON.parse(localStorage.getItem('simpleWishlist')) || [];
                    wl = wl.filter(x => x.id !== id);
                    localStorage.setItem('simpleWishlist', JSON.stringify(wl));
                    updateWishlistCount();
                    // update modal list
                    const list = modal.querySelector('#profileWishlistList');
                    if (!wl.length) {
                        list.innerHTML = '<div style="color:#777">No items in wishlist.</div>';
                    } else {
                        list.innerHTML = wl.map(i => `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #f5f5f5"><div>${i.name} — <strong>$${i.price.toFixed(2)}</strong></div><button class=\"small-btn remove-wl\" data-id=\"${i.id}\">Remove</button></div>`).join('');
                        // rebind
                        modal.querySelectorAll('.remove-wl').forEach(b => b.addEventListener('click', function(){
                            const id2 = parseInt(this.getAttribute('data-id'));
                            let wl2 = JSON.parse(localStorage.getItem('simpleWishlist')) || [];
                            wl2 = wl2.filter(x => x.id !== id2);
                            localStorage.setItem('simpleWishlist', JSON.stringify(wl2));
                            updateWishlistCount();
                            // re-render modal list recursively
                            modal.querySelector('#profileWishlistList').innerHTML = wl2.length ? wl2.map(i => `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #f5f5f5"><div>${i.name} — <strong>$${i.price.toFixed(2)}</strong></div><button class=\\"small-btn remove-wl\\" data-id=\\"${i.id}\\">Remove</button></div>`).join('') : '<div style="color:#777">No items in wishlist.</div>';
                        }));
                    }
                });
            });
        }

        if (userInfo) {
            userInfo.addEventListener('click', function(e) { e.stopPropagation(); toggleProfileDropdown(); });
        }

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            initSimpleWishlist();
            updateCartCount();
            // Auto-open signup modal for new visitors who are not logged in
            if (!localStorage.getItem('beautyBloomUser')) {
                setTimeout(() => showLoginModal('signup'), 300);
            }
        });
