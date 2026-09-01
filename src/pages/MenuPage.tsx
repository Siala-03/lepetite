import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { usePageTitle } from '../hooks/usePageTitle';

type MenuCategory = 'Brunch' | 'Starters & Salads' | 'Main Courses' | 'Desserts' | 'Coffee' | 'Cocktails & Bar' | 'Wine List';
type MenuItem = {
  name: string;
  desc?: string;
  price: string;
};
type MenuSection = {
  title: string;
  items: MenuItem[];
};

const rwf = (n: number) => `RWF ${n.toLocaleString('en-US')}`;

const menuData: Record<MenuCategory, MenuSection[]> = {
  Brunch: [
  {
    title: 'Saturday & Sunday, 11:30 AM – 4:00 PM',
    items: [
    { name: 'Hot Beignets', desc: 'New Orleans style, berry and Nutella dipping sauces (fresh — allow extra cooking time)', price: rwf(12000) },
    { name: 'Vegetable Omelet', desc: 'Sautéed peppers, onions & herbs, potatoes, fruit salad', price: rwf(21000) },
    { name: 'Avocado Toast', desc: 'Toasted baguette, avocado, radish, herbs, tomato, potatoes, fruit salad', price: rwf(18000) },
    { name: 'Huevos Rancheros', desc: 'Two eggs any style, black beans, tortillas, zesty ranchero sauce, avocado, fresh cheese, smoked paprika', price: rwf(22000) },
    { name: 'Blueberry Pancakes', desc: 'Fresh plump berries, fruit salad, maple syrup', price: rwf(18000) },
    { name: 'Eggs Benedict', desc: 'Smoked salmon, croissant, poached eggs, hollandaise, potatoes, fruit salad', price: rwf(27000) },
    { name: 'Chorizo & Egg Hash', desc: 'Spicy Spanish chorizo, potato, two eggs any style, pico de gallo, fruit salad', price: rwf(24000) },
    { name: 'Bougie Breakfast', desc: 'Two eggs any style, two blueberry pancakes, roasted tomato, potatoes, bacon, fruit salad', price: rwf(28000) },
    { name: 'Steak & Eggs', desc: 'Aged Kenyan ribeye, two eggs any style, plantains, chimichurri, potatoes, fruit salad', price: rwf(36000) },
    { name: 'Smoked Salmon Baguette', desc: 'Chèvre, pickled onion, capers, lemon zest, herbs, petit salad', price: rwf(24000) },
    { name: 'Assorted Imported Cheese', desc: 'Grilled baguette, berries, preserves, apples, grapes, candied walnuts', price: rwf(29000) },
    { name: 'Charcuterie & Cheese', desc: "Chef's selection of European cheeses, foie gras terrine, imported meats, fruit, nuts, olives, grilled bread", price: rwf(48000) },
    { name: 'Grilled Salmon', desc: 'Saffron orzo pasta, tomato coulis, spinach, Parmesan', price: rwf(47000) },
    { name: 'Steak Frites', desc: 'Fire-grilled filet mignon medallions, green peppercorn sauce, Parmesan potato fries, vegetables du jour', price: rwf(39000) },
    { name: 'Chicken Paillard', desc: 'Breaded & pan-fried chicken breast, lemon caper beurre blanc, salad of greens, Parmesan (also available simply grilled — ask your server)', price: rwf(29000) }]

  }],

  'Starters & Salads': [
  {
    title: 'Starters',
    items: [
    { name: 'Classic French Onion Soup', desc: 'A Le Petit Chalet favorite — caramelized onions, beef broth, melted Gruyère, crouton', price: rwf(16000) },
    { name: 'Macaroni & Cheese', desc: 'Creamy Irish cheddar, crispy crumb topping', price: rwf(13000) },
    { name: 'Garlic Mushroom & Gruyère Toast', desc: 'Sautéed mushrooms on garlic baguette with Gruyère', price: rwf(15000) },
    { name: 'Charred Aubergine', desc: 'Whipped feta, olive oil, herbs, garlic, sun-dried tomato', price: rwf(14000) },
    { name: 'Crispy Calamari', desc: 'Buttermilk marinated and flash fried, lemon aioli', price: rwf(23000) },
    { name: 'Smoked Salmon Baguette', desc: 'Chèvre, pickled onion, caper, smoked salmon, petit salad, crispy baguette, herbs', price: rwf(24000) },
    { name: 'Pepperonata & Feta', desc: 'Slow-roasted peppers, garlic, olive oil, herbs, feta, grilled baguette', price: rwf(12000) },
    { name: 'Assorted Imported Cheese', desc: "Chef's selection of often-changing European cheeses, grilled baguette, berries, grapes, candied walnut", price: rwf(29000) },
    { name: 'Charcuterie & Cheese', desc: "Chef's selection of imported meats, foie gras terrine, European cheeses, olives, grilled baguette", price: rwf(48000) }]

  },
  {
    title: 'Salads',
    items: [
    { name: 'LPC House Salad', desc: 'Local & imported greens, radish, cherry tomato, carrot, cucumber, balsamic vinaigrette', price: rwf(9000) },
    { name: 'Caesar Salad', desc: 'Crispy romaine, Parmesan, creamy classic anchovy dressing, garlic croutons', price: rwf(14000) },
    { name: 'Tree Tomato Salad', desc: 'Beetroot, avocado, orange, arugula, gooseberries, orange vinaigrette', price: rwf(15000) },
    { name: 'Goat Cheese Salad', desc: 'Chèvre, blueberries, orange, candied walnut, mixed lettuces, orange-rosemary vinaigrette', price: rwf(17000) }]

  }],

  'Main Courses': [
  {
    title: 'From the Kitchen',
    items: [
    { name: 'Steak Frites', desc: 'Fire-grilled filet mignon medallions, green peppercorn sauce, Parmesan potato fries, vegetables du jour', price: rwf(39000) },
    { name: 'Braised Lamb Shank', desc: 'Fork-tender lamb shank slow-braised in rich red wine sauce, carrot parisienne, peas, Parmesan, creamy Italian polenta, garlic crisps', price: rwf(36000) },
    { name: 'Tilapia', desc: 'Oven roasted with garlic, paprika, lemon & chilis, vegetables du jour, parsley potatoes, tomato provençale', price: rwf(29000) },
    { name: 'Chicken Rigatoni alla Vodka', desc: 'Grilled chicken, tomato Alfredo sauce, rigatoni pasta, Parmesan, herbs, oven-dried tomato', price: rwf(30000) },
    { name: 'Chicken Paillard', desc: 'Breaded & pan-fried chicken breast, lemon caper beurre blanc, salad of gourmet greens, Parmesan, cherry tomato (also available simply grilled — ask your server)', price: rwf(29000) },
    { name: 'Vegetable Risotto', desc: 'Creamy arborio rice with carrot coulis, roasted tomato, zucchini, broccolini, peas, Parmesan', price: rwf(24000) },
    { name: 'Blackened Chicken Fettuccini', desc: 'Grilled chicken, homemade fettuccini, creamy Parmesan sauce, blackening spice', price: rwf(29000) },
    { name: 'Grilled Salmon', desc: 'Saffron orzo pasta, tomato coulis, garlic sautéed spinach, Parmesan', price: rwf(47000) },
    { name: 'Dry Aged Kenyan Bone-In Ribeye', desc: '500g, truffled butter, parsley potato, vegetables du jour, natural jus', price: rwf(59000) }]

  }],

  Desserts: [
  {
    title: 'Desserts',
    items: [
    { name: 'Trio of Crème Brûlée', desc: 'Vanilla, saffron, orange, berries', price: rwf(16000) },
    { name: 'Lemon Tart', desc: 'Cream cheese & lemon tart, strawberry sauce, berries', price: rwf(16000) },
    { name: 'Sticky Date Pudding', desc: 'Moist date cake, hot Amarula caramel, vanilla bean ice cream', price: rwf(16000) },
    { name: 'Hot Fudge Sundae', desc: 'Premium caramel & vanilla bean ice cream, hot fudge, whipped cream', price: rwf(16000) },
    { name: 'Chocolate Bundt Cake', desc: 'Moist Swiss cocoa cake, crème anglaise, whipped cream, berries', price: rwf(16000) },
    { name: 'Affogato', desc: 'Premium Rwandan espresso with homemade vanilla bean ice cream', price: rwf(10000) }]

  }],

  Coffee: [
  {
    title: 'Coffee & Tea',
    items: [
    { name: 'Tea', desc: 'Ask your server for varieties', price: rwf(6000) },
    { name: 'African Tea', price: rwf(6000) },
    { name: 'Espresso Shot', price: rwf(3000) },
    { name: 'Cappuccino', desc: 'Steamed milk, foam', price: rwf(6000) },
    { name: 'Latte', desc: 'Espresso, hot milk, foam', price: rwf(7000) },
    { name: 'Macchiato', desc: 'Espresso, little foam', price: rwf(4000) },
    { name: 'Mocha', desc: 'Espresso, milk, Monin chocolate', price: rwf(6000) },
    { name: 'Hot Chocolate', desc: 'Monin chocolate & milk, whipped Chantilly cream', price: rwf(8000) },
    { name: 'Affogato', desc: 'Premium Rwandan espresso with homemade vanilla bean ice cream', price: rwf(10000) }]

  }],

  'Cocktails & Bar': [
  {
    title: 'Crafted Cocktails',
    items: [
    { name: 'Hari Kari', desc: 'Kari Rwandan potato vodka, Cointreau, passionfruit (made in Rwanda)', price: rwf(18000) },
    { name: 'Imizi Pineapple Paradise', desc: 'Imizi rum, pineapple, grenadine (made in Rwanda)', price: rwf(18000) },
    { name: "Chalet D'Or", desc: 'Hennessy, passionfruit, honey, citrus', price: rwf(22000) },
    { name: 'New York Sour', desc: 'Wild Turkey bourbon, lemon, simple syrup, Cabernet float, egg white (optional)', price: rwf(17000) },
    { name: 'Old Fashioned', desc: 'Wild Turkey bourbon, orange, bitters, maraschino cherry', price: rwf(17000) },
    { name: 'Aperol Spritz', desc: 'Aperol, Prosecco & soda water', price: rwf(16000) },
    { name: 'White Sangria', desc: 'Vodka, Chardonnay, fruit', price: rwf(15000) },
    { name: "Chalet's Sangria", desc: 'Cabernet, brandy, fruit', price: rwf(15000) },
    { name: 'Smoked Manhattan', desc: 'Jack Daniels, vermouth, bitters', price: rwf(18000) },
    { name: 'Cadillac Margarita', desc: 'Grand Marnier, Olmeca Gold, lime, salt', price: rwf(22000) },
    { name: 'Mojito', desc: 'Bacardi rum, mint, lime, Vitalo', price: rwf(17000) },
    { name: 'Raspberry Beret', desc: 'Chambord, Absolut vodka, pineapple', price: rwf(18000) },
    { name: 'Bubbly Pink Punch', desc: 'Prosecco, Cointreau, vodka, grenadine', price: rwf(17000) },
    { name: 'Negroni', desc: 'Gordons gin, Campari, Cinzano, orange', price: rwf(17000) },
    { name: 'Sidecar', desc: 'Cognac, Grand Marnier, lemon juice', price: rwf(20000) },
    { name: 'Le Petit Prince', desc: 'Olmeca Silver, Cointreau, ginger, mint, lemon', price: rwf(17000) },
    { name: 'Espresso Martini', desc: 'Absolut vodka, Kahlua', price: rwf(17000) },
    { name: 'Whiskey Sour', desc: 'Whisky, lime juice, simple syrup, egg white (optional)', price: rwf(17000) }]

  },
  {
    title: 'Mocktails',
    items: [
    { name: 'Elder Gentleman', desc: 'Vitalo, smashed blueberry, lime, elderflower', price: rwf(9000) },
    { name: 'Frozen Hibiscus Fizz', price: rwf(9000) },
    { name: 'Mint Lemonade Slushie', price: rwf(9000) },
    { name: 'Ginger Lemongrass Lemonade', price: rwf(9000) },
    { name: 'Detox', desc: 'Beetroot, pineapple, ginger', price: rwf(9000) },
    { name: 'Watermelon, Strawberry & Basil Breeze', price: rwf(9000) },
    { name: 'Sweet Sunrise', desc: 'Grenadine, orange juice, Vitalo', price: rwf(9000) },
    { name: 'Pomegranate Mojito (Virgin)', desc: 'Pomegranate, grenadine, lime, simple syrup, orange', price: rwf(9000) }]

  },
  {
    title: 'Soda & Juice',
    items: [
    { name: 'Coca Cola, Sprite, Fanta, Vitale', price: rwf(3000) },
    { name: 'Virunga Sparkling or Still', price: rwf(3000) },
    { name: 'Fresh Orange Juice', price: rwf(12000) },
    { name: 'Fresh Mango Juice', price: rwf(12000) },
    { name: 'Fresh Tree Tomato Juice', price: rwf(8000) },
    { name: 'Fresh Pineapple Juice', price: rwf(8000) }]

  },
  {
    title: 'Beer',
    items: [
    { name: 'Corona Extra', price: rwf(7000) },
    { name: 'Desperados', price: rwf(7000) },
    { name: 'Amstel', price: rwf(4000) },
    { name: 'Heineken', price: rwf(5000) },
    { name: 'Virunga Gold', price: rwf(4000) },
    { name: 'Virunga Mist', price: rwf(4000) }]

  }],

  'Wine List': [
  {
    title: 'Red Wine — by the Bottle',
    items: [
    { name: 'Orbiel & Frères Merlot', desc: 'France, 2024', price: rwf(64000) },
    { name: 'Bruce Jack Cabernet Sauvignon', desc: 'South Africa, 2022', price: rwf(80000) },
    { name: 'Spier Signature Pinotage', desc: 'South Africa, 2024', price: rwf(77000) },
    { name: 'Le Bio Balthazar Organic Minervois', desc: 'Grenache & Syrah, organic — France, 2018', price: rwf(70000) },
    { name: 'Man Vintners, Bosstok Pinotage', desc: 'South Africa, 2023', price: rwf(100000) },
    { name: "Gerard Bertrand Change Organic Merlot IGP Pays D'Oc", desc: 'Organic — France, 2023', price: rwf(92000) },
    { name: 'Bosman Generation 8 Shiraz', desc: 'South Africa, 2023', price: rwf(105000) },
    { name: 'Clarendelle Bordeaux Rouge', desc: 'France, 2017', price: rwf(110000) },
    { name: 'Kanonkop Kadette Cape Blend', desc: 'Pinotage, Cabernet Sauvignon, Merlot & Cabernet Franc — South Africa, 2023', price: rwf(130000) },
    { name: 'Paul Cluver Pinot Noir', desc: 'South Africa, 2023', price: rwf(130000) },
    { name: 'Zenato Valpolicella Superiore DOC', desc: 'Italy, 2020', price: rwf(110000) },
    { name: 'Antinori Pèppoli Chianti Classico', desc: 'Italy, 2021', price: rwf(150000) },
    { name: 'Prunotto Barolo DOCG', desc: 'Italy, 2018', price: rwf(245000) }]

  },
  {
    title: 'White & Rosé — by the Bottle',
    items: [
    { name: 'Cavit Principato Chardonnay IGT', desc: 'Italy, 2023', price: rwf(64000) },
    { name: 'Château Pierrousselle Sauvignon Blanc', desc: 'France, 2024', price: rwf(67000) },
    { name: 'KWV Vinecrafter Chenin Blanc', desc: 'South Africa, 2022', price: rwf(67000) },
    { name: 'Clarendelle Bordeaux Blanc', desc: 'France, 2022', price: rwf(110000) },
    { name: 'Bruce Jack Lifestyle Rosé', desc: 'Sauvignon Blanc & Shiraz — South Africa, 2024', price: rwf(80000) },
    { name: 'Mastri Vernacoli Pinot Grigio', desc: 'Italy', price: rwf(75000) },
    { name: 'La Colline aux Princes Sancerre Sauvignon Blanc', desc: 'France, 2024', price: rwf(140000) },
    { name: 'Louis Latour Chablis La Chanfleure', desc: 'France, 2022', price: rwf(165000) }]

  },
  {
    title: 'Champagne & Sparkling — by the Bottle',
    items: [
    { name: 'KWV Classic Sparkling Demi-Sec', desc: 'South Africa', price: rwf(80000) },
    { name: 'Sensi 18K Gold Prosecco', desc: 'Italy', price: rwf(115000) },
    { name: 'Sensi Prosecco, Extra Dry', desc: 'Italy', price: rwf(95000) },
    { name: 'V&G Dupont Nuage de Blancs', desc: 'France', price: rwf(180000) },
    { name: 'V&G Dupont Eclat de Nos Territoirs', desc: 'France', price: rwf(180000) },
    { name: 'Veuve Clicquot', desc: 'France', price: rwf(270000) }]

  }]

};
const categories: MenuCategory[] = ['Brunch', 'Starters & Salads', 'Main Courses', 'Desserts', 'Coffee', 'Cocktails & Bar', 'Wine List'];

export function MenuPage() {
  usePageTitle('Menu | Le Petit Chalet');
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Starters & Salads');
  return (
    <PageTransition>
      <main className="flex-grow bg-chalet-black text-chalet-cream min-h-screen">
        {/* Hero Banner */}
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/lepetitchalet-wings.jpeg"
              alt="Menu hero"
              className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-chalet-black/70 backdrop-blur-sm"></div>
          </div>
          <div className="relative z-10 text-center px-4 mt-16">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className="font-display text-5xl md:text-6xl text-chalet-warm-white mb-4">

              Our Menu
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.2
              }}
              className="text-chalet-amber tracking-widest uppercase text-sm">

              A mountain-inspired kitchen and cellar
            </motion.p>
          </div>
        </section>

        {/* Chef's Highlights */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-chalet-amber text-sm font-bold tracking-[0.2em] uppercase">
              Fan Favorites
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-chalet-warm-white mt-4">
              Chef's Highlights
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
            {
              name: 'Classic French Onion Soup',
              img: '/lepetitchalet-onion-soup.jpeg'
            },
            {
              name: 'Steak Frites',
              img: '/lepetitchalet-steak-plated.jpeg'
            },
            {
              name: 'Caesar Salad',
              img: '/lepetitchalet-caesar-salad.jpeg'
            },
            {
              name: 'Sticky Date Pudding',
              img: '/lepetitchalet-sticky-date.jpeg'
            },
            {
              name: 'From the Kitchen',
              img: '/lepetitchalet-chef-flambe.jpeg'
            }].
            map((item, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: i * 0.1,
                duration: 0.5
              }}
              className="relative aspect-[3/4] overflow-hidden rounded-sm group">

                <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                <div className="absolute inset-0 bg-gradient-to-t from-chalet-black/90 via-chalet-black/10 to-transparent"></div>
                <span className="absolute bottom-3 left-3 right-3 text-chalet-warm-white font-display text-sm md:text-base">
                  {item.name}
                </span>
              </motion.div>
            )}
          </div>
        </section>

        {/* Menu Content */}
        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-nowrap items-center justify-start sm:justify-center gap-5 md:gap-8 mb-16 border-b border-chalet-charcoal pb-6 overflow-x-auto no-scrollbar">
            {categories.map((cat) =>
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 whitespace-nowrap font-display text-sm tracking-wide uppercase transition-colors relative pb-2 ${activeCategory === cat ? 'text-chalet-amber' : 'text-chalet-cream/60 hover:text-chalet-warm-white'}`}>

                {cat}
                {activeCategory === cat &&
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-chalet-amber" />

              }
              </button>
            )}
          </div>

          {/* Menu Items */}
          <div className="min-h-[500px] max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  y: -20
                }}
                transition={{
                  duration: 0.4
                }}
                className="space-y-16">

                {activeCategory === 'Brunch' &&
              <p className="text-chalet-cream/60 text-sm -mt-8 mb-8">
                    Ask your server about today's Daily Specials.
                  </p>
              }

                {menuData[activeCategory].map((section) =>
                <div key={section.title}>
                    <h3 className="text-chalet-amber font-display text-lg tracking-wide uppercase mb-6">
                      {section.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                      {section.items.map((item, idx) =>
                    <div key={idx} className="flex flex-col">
                          <div className="flex justify-between items-baseline mb-1">
                            <h4 className="font-display text-base text-chalet-warm-white">
                              {item.name}
                            </h4>
                            <div className="flex-grow border-b border-dotted border-chalet-charcoal mx-4 relative top-[-6px]"></div>
                            <span className="font-display text-sm text-chalet-amber whitespace-nowrap">
                              {item.price}
                            </span>
                          </div>
                          {item.desc &&
                      <p className="text-chalet-cream/60 text-sm font-light leading-relaxed">
                              {item.desc}
                            </p>
                      }
                        </div>
                    )}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Notice */}
          <div className="mt-24 text-center border-t border-chalet-charcoal pt-8">
            <a
              href="/lepetitchalet-menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-chalet-amber hover:text-chalet-honey transition-colors text-sm tracking-wide uppercase mb-4">

              Download Full Menu (PDF)
            </a>
            <p className="text-chalet-cream/40 text-xs max-w-2xl mx-auto">
              Please inform your server of any allergies or dietary
              requirements.
            </p>
          </div>
        </section>
      </main>
    </PageTransition>);

}
