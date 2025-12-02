document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        {
            id: 1,
            title: 'Spaghetti Aglio e Olio',
            time: '20 min',
            difficulty: 'Easy',
            ingredients: ['spaghetti','garlic','olive oil','chili flakes','parsley'],
            instructions: 'Cook pasta. In a pan, gently toast garlic in oil, toss with pasta and parsley. Serve hot.',
            image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=400&fit=crop'
        },
        {
            id: 2,
            title: 'Roasted Lemon Chicken',
            time: '1 hr',
            difficulty: 'Medium',
            ingredients: ['chicken','lemon','rosemary','olive oil','salt'],
            instructions: 'Rub chicken, roast until golden and cooked through. Rest, carve and serve.',
            image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=400&fit=crop'
        },
        {
            id: 3,
            title: 'Vegetable Stir Fry',
            time: '25 min',
            difficulty: 'Easy',
            ingredients: ['broccoli','carrot','bell pepper','soy sauce','ginger'],
            instructions: 'Stir fry vegetables over high heat, add sauce, serve with rice.',
            image: './images/stir-fry-recipe.jpg'
        },
        {
            id: 4,
            title: 'Chocolate Mug Cake',
            time: '5 min',
            difficulty: 'Easy',
            ingredients: ['flour','cocoa powder','milk','sugar','butter'],
            instructions: 'Mix ingredients in a mug and microwave for about 90 seconds.',
            image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop'
        },
        {
            id: 5,
            title: 'Margherita Pizza',
            time: '45 min',
            difficulty: 'Medium',
            ingredients: ['pizza dough','tomato sauce','mozzarella','basil','olive oil'],
            instructions: 'Roll dough, spread sauce, add cheese and basil. Bake at 450°F for 12-15 minutes until golden.',
            image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&h=400&fit=crop'
        },
        {
            id: 6,
            title: 'Grilled Salmon with Asparagus',
            time: '30 min',
            difficulty: 'Medium',
            ingredients: ['salmon fillets','asparagus','lemon','garlic','butter'],
            instructions: 'Season salmon, grill 4-6 min per side. Grill asparagus with garlic butter. Serve with lemon.',
            image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop'
        },
        {
            id: 7,
            title: 'Pad Thai',
            time: '35 min',
            difficulty: 'Medium',
            ingredients: ['rice noodles','shrimp','peanuts','lime','fish sauce','egg'],
            instructions: 'Stir fry noodles, shrimp and veggies. Add sauce and egg. Top with peanuts and lime.',
            image: './images/pad-thai.jpg'
        },
        {
            id: 8,
            title: 'Caprese Salad',
            time: '10 min',
            difficulty: 'Easy',
            ingredients: ['tomatoes','fresh mozzarella','basil','olive oil','balsamic vinegar'],
            instructions: 'Layer tomatoes, mozzarella and basil. Drizzle with oil and vinegar. Season to taste.',
            image: './images/caprese-salad.jpg'
        },
        {
            id: 9,
            title: 'Beef Tacos',
            time: '20 min',
            difficulty: 'Easy',
            ingredients: ['ground beef','taco shells','lettuce','cheese','salsa','sour cream'],
            instructions: 'Brown beef, season and warm shells. Top with lettuce, cheese, salsa and sour cream.',
            image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop'
        },
        {
            id: 10,
            title: 'Butter Chicken Curry',
            time: '50 min',
            difficulty: 'Hard',
            ingredients: ['chicken','butter','cream','tomatoes','garam masala','ginger','garlic'],
            instructions: 'Marinate and grill chicken. Simmer in spiced tomato-cream sauce. Serve with rice or naan.',
            image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop'
        },
        {
            id: 11,
            title: 'Greek Salad with Feta',
            time: '15 min',
            difficulty: 'Easy',
            ingredients: ['cucumber','tomatoes','red onion','olives','feta cheese','olive oil'],
            instructions: 'Chop vegetables, toss with olives and feta. Dress with olive oil and oregano.',
            image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop'
        },
        {
            id: 12,
            title: 'Risotto al Tartufo',
            time: '40 min',
            difficulty: 'Hard',
            ingredients: ['arborio rice','white wine','truffle oil','parmesan','vegetable broth','butter'],
            instructions: 'Toast rice, add wine, gradually add broth while stirring. Finish with truffle oil and cheese.',
            image: './images/Risotto al Tartufo.jpg'
        },
        {
            id: 13,
            title: 'Smoothie Bowl',
            time: '10 min',
            difficulty: 'Easy',
            ingredients: ['berries','yogurt','granola','honey','coconut','banana'],
            instructions: 'Blend berries and yogurt into thick base. Top with granola, honey, coconut and fruit.',
            image: './images/Smoothie-Bowl.jpg'
        },
        {
            id: 14,
            title: 'Beef Wellington',
            time: '2 hrs',
            difficulty: 'Hard',
            ingredients: ['beef tenderloin','puff pastry','mushrooms','prosciutto','shallots','egg wash'],
            instructions: 'Sear beef, wrap with mushroom duxelles and prosciutto, cover in pastry. Bake until golden.',
            image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop'
        },
        {
            id: 15,
            title: 'Carbonara Pasta',
            time: '25 min',
            difficulty: 'Medium',
            ingredients: ['spaghetti','eggs','pancetta','pecorino romano','black pepper'],
            instructions: 'Cook pasta, fry pancetta, toss with egg mixture off heat. Season with cheese and pepper.',
            image: './images/carbonara pasta.jpg'
        }
    ];	const recipesEl = document.getElementById('recipes');
	const searchEl = document.getElementById('search');
	const difficultyEl = document.getElementById('difficulty');
	const modal = document.getElementById('modal');
	const modalContent = document.getElementById('modal-content');
	const modalClose = document.getElementById('modal-close');
	const modalBackdrop = document.getElementById('modal-backdrop');

	function render(list) {
		recipesEl.innerHTML = '';
		if (!list.length) {
			const empty = document.createElement('div');
			empty.className = 'empty';
			empty.textContent = 'No recipes found.';
			recipesEl.appendChild(empty);
			return;
		}

		list.forEach(r => {
			const card = document.createElement('article');
			card.className = 'card';
			card.tabIndex = 0;

			const img = document.createElement('img');
			img.src = r.image;
			img.alt = r.title;
			img.onerror = () => { img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%23ddd" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%23999" text-anchor="middle" dominant-baseline="middle"%3EImage not available%3C/text%3E%3C/svg%3E'; };

			const body = document.createElement('div');
			body.className = 'card-body';

			const title = document.createElement('h3');
			title.className = 'card-title';
			title.textContent = r.title;

			const meta = document.createElement('div');
			meta.className = 'meta';
			const time = document.createElement('span');
			time.textContent = r.time;
			const diff = document.createElement('span');
			diff.className = 'tag';
			diff.textContent = r.difficulty;

			const desc = document.createElement('p');
			desc.className = 'desc';
			desc.textContent = r.ingredients.slice(0,4).join(', ');

			meta.appendChild(time);
			meta.appendChild(diff);
			body.appendChild(title);
			body.appendChild(meta);
			body.appendChild(desc);

			card.appendChild(img);
			card.appendChild(body);

			card.addEventListener('click', () => openModal(r));
			card.addEventListener('keydown', (e) => { if (e.key === 'Enter') openModal(r); });

			recipesEl.appendChild(card);
		});
	}

	function normalize(s){return (s||'').toString().toLowerCase();}

	function applyFilters(){
		const q = normalize(searchEl.value);
		const diff = difficultyEl.value;
		const filtered = recipes.filter(r => {
			if (diff && r.difficulty !== diff) return false;
			if (!q) return true;
			if (normalize(r.title).includes(q)) return true;
			if (r.ingredients.join(' ').toLowerCase().includes(q)) return true;
			return false;
		});
		render(filtered);
	}

	function openModal(recipe){
		modalContent.innerHTML = '';
		const title = document.createElement('h2');
		title.id = 'modal-title';
		title.textContent = recipe.title;

		const img = document.createElement('img');
		img.src = recipe.image;
		img.alt = recipe.title;
		img.style.width = '100%';
		img.style.borderRadius = '8px';

		const info = document.createElement('p');
		info.className = 'meta';
		info.textContent = `${recipe.time} • ${recipe.difficulty}`;

		const ing = document.createElement('ul');
		recipe.ingredients.forEach(i => { const li = document.createElement('li'); li.textContent = i; ing.appendChild(li); });

		const inst = document.createElement('p');
		inst.textContent = recipe.instructions;

		modalContent.appendChild(title);
		modalContent.appendChild(img);
		modalContent.appendChild(info);
		modalContent.appendChild(document.createElement('h4')).textContent = 'Ingredients';
		modalContent.appendChild(ing);
		modalContent.appendChild(document.createElement('h4')).textContent = 'Instructions';
		modalContent.appendChild(inst);

		modal.setAttribute('aria-hidden','false');
		document.body.style.overflow = 'hidden';
	}

	function closeModal(){
		modal.setAttribute('aria-hidden','true');
		document.body.style.overflow = '';
	}

	modalClose.addEventListener('click', closeModal);
	modalBackdrop.addEventListener('click', closeModal);
	document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeModal(); });

	searchEl.addEventListener('input', applyFilters);
	difficultyEl.addEventListener('change', applyFilters);

	render(recipes);
});
