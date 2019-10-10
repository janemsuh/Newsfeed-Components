/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'Office Hours Reimagined',
    date: 'Mar 4, 2019',
    firstParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut sem viverra. Nunc sed velit dignissim sodales ut eu. Vel turpis nunc eget lorem dolor sed viverra ipsum. Pellentesque elit eget gravida cum. Velit euismod in pellentesque massa. Erat pellentesque adipiscing commodo elit at imperdiet dui. Lacus luctus accumsan tortor posuere ac ut. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Facilisis mauris sit amet massa vitae tortor. Odio ut enim blandit volutpat maecenas volutpat blandit. Et molestie ac feugiat sed lectus vestibulum. Non arcu risus quis varius. Eu feugiat pretium nibh ipsum. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Semper viverra nam libero justo laoreet. Tincidunt praesent semper feugiat nibh. Consequat semper viverra nam libero justo. Ac turpis egestas sed tempus.',
    
    secondParagraph: 'Dolor morbi non arcu risus. In fermentum posuere urna nec tincidunt praesent semper feugiat. Lectus nulla at volutpat diam. Vitae tortor condimentum lacinia quis vel eros donec ac. Tristique senectus et netus et malesuada fames ac turpis egestas. Porttitor lacus luctus accumsan tortor posuere. Viverra ipsum nunc aliquet bibendum enim. Pretium fusce id velit ut tortor pretium. At quis risus sed vulputate odio ut. Enim nunc faucibus a pellentesque sit amet. A arcu cursus vitae congue mauris rhoncus aenean. Ac tincidunt vitae semper quis lectus nulla. Magnis dis parturient montes nascetur ridiculus. Pharetra sit amet aliquam id diam maecenas ultricies mi eget.',
    
    thirdParagraph: 'Cras sed felis eget velit aliquet sagittis id. Dis parturient montes nascetur ridiculus mus mauris. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Nunc sed velit dignissim sodales ut eu sem integer vitae. In eu mi bibendum neque. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Diam donec adipiscing tristique risus nec feugiat. Vulputate dignissim suspendisse in est. Vulputate sapien nec sagittis aliquam. Amet cursus sit amet dictum sit amet.'
  },
  {
    title: 'Code Challenges vs Networking',
    date: 'Jul 1, 2019',
    firstParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Leo duis ut diam quam nulla porttitor massa id. Non arcu risus quis varius quam quisque id diam. Id diam maecenas ultricies mi eget mauris pharetra. Ut eu sem integer vitae justo. Arcu felis bibendum ut tristique et egestas quis. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Imperdiet proin fermentum leo vel orci. Vulputate eu scelerisque felis imperdiet proin. Enim facilisis gravida neque convallis a cras semper auctor.',

    secondParagraph: 'Amet risus nullam eget felis eget. Arcu cursus vitae congue mauris. Sed enim ut sem viverra aliquet. Ac felis donec et odio pellentesque. In ornare quam viverra orci sagittis. Habitasse platea dictumst quisque sagittis. Mauris augue neque gravida in fermentum. Ullamcorper sit amet risus nullam. Ut aliquam purus sit amet luctus venenatis. Lacus luctus accumsan tortor posuere ac. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Imperdiet dui accumsan sit amet. Nibh mauris cursus mattis molestie. Eu turpis egestas pretium aenean pharetra magna ac.',
    
    thirdParagraph: 'Sed cras ornare arcu dui vivamus. Sed sed risus pretium quam vulputate dignissim. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Cursus sit amet dictum sit amet justo. Molestie nunc non blandit massa. Turpis egestas pretium aenean pharetra. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Et netus et malesuada fames. Molestie at elementum eu facilisis sed odio morbi quis. Ultrices in iaculis nunc sed augue lacus. Neque volutpat ac tincidunt vitae. Morbi non arcu risus quis varius. Nisi porta lorem mollis aliquam. Lobortis elementum nibh tellus molestie nunc non blandit. Facilisi nullam vehicula ipsum a. Mi quis hendrerit dolor magna eget est. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Vitae et leo duis ut.'
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.
  
  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/

function articleCreator(data) {

  const article = document.createElement('div');
  const articleTitle = document.createElement('h2');
  const articleDate = document.createElement('p');
  const para1 = document.createElement('p')
  const para2 = document.createElement('p');
  const para3 = document.createElement('p');
  const button = document.createElement('span');

  article.classList.add('article');
  articleDate.classList.add('date');
  button.classList.add('expandButton');

  articleTitle.textContent = data.title;
  articleDate.textContent = data.date;
  para1.textContent = data.firstParagraph;
  para2.textContent = data.secondParagraph;
  para3.textContent = data.thirdParagraph;
  button.textContent = 'Click to read';

  button.addEventListener('click', (event) => {
    article.classList.toggle('article-open');
  });

  article.appendChild(articleTitle);
  article.appendChild(articleDate);
  article.appendChild(para1);
  article.appendChild(para2);
  article.appendChild(para3);
  article.appendChild(button);

  return article;
};

const articles = document.querySelector('.articles');

data.map(item => {
  articles.appendChild(articleCreator(item));
})