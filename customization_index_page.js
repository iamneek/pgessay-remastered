const ele = document.createElement('p')
const element = document.createElement('div')
const element2 = document.createElement('div')
const element3 = document.createElement('div')
const image_taken = document.createElement('img')
const image_paul = document.createElement('img')
const titleOfIndex = document.createElement('h1')

image_taken.classList.add('image_taken')
titleOfIndex.classList.add('titleOfIndex')
element.classList.add('links')
element2.classList.add('links2')
element3.classList.add('links3')
ele.classList.add('wannajoin');
ele.textContent = "Want to start a startup? Get funded by ";

const a = document.createElement('a');
a.href = "https://www.ycombinator.com";
a.textContent = "Y Combinator.";
a.style.color = "#FF5C00";
a.style.fontWeight = "bold";
a.style.textDecoration = "underline";

ele.appendChild(a);


const nav = {
  essays: ["Essays", "https://paulgraham.com/articles.html"],
  quote: ["Quotes", "https://paulgraham.com/quo.html"],
  Books: ["Books", "https://paulgraham.com/books.html"],
  lisp: ["Lisp", "https://paulgraham.com/lisp.html"],
  faq: ["FAQs", "https://paulgraham.com/faq.html"],
  raq: ["RAQs", "https://paulgraham.com/raq.html"],
  spam: ["Spam", "https://paulgraham.com/antispam.html"],
  bel: ["Bel", "https://paulgraham.com/bel.html"],
  arc: ["Arc", "https://paulgraham.com/arc.html"],
  bio: ["Bio", "https://paulgraham.com/bio.html"],
  resps: ["Responses", "https://paulgraham.com/kedrosky.html"],
  email: ["Email", "https://paulgraham.com/info.html"],
  twitter: ["Twitter/ X", "https://twitter.com/paulg"],
  mastodon: ["Mastodon", "https://mas.to/@paulg"],
};


const firstRow = document.createElement('div');
const first_items = document.createElement('div');
first_items.classList.add('links_items')

for (const [key, [title, link]] of Object.entries(nav).slice(0, 5)) {
  const a = document.createElement('a');
  a.textContent = title;
  a.href = link;
  first_items.appendChild(a);
  firstRow.appendChild(first_items);
}

const secondRow = document.createElement('div');
const second_items = document.createElement('div');
second_items.classList.add('links3_items')


for (const [key, [title, link]] of Object.entries(nav).slice(5, 10)) {
  const a = document.createElement('a');
  a.textContent = title;
  a.href = link;
  second_items.appendChild(a);
  secondRow.appendChild(second_items);
}

const thirdRow = document.createElement('div');
const third_items = document.createElement('div');
third_items.classList.add('links2_items')


for (const [key, [title, link]] of Object.entries(nav).slice(10, 14)) {
  const a = document.createElement('a');
  a.textContent = title;
  a.href = link;
  third_items.appendChild(a);
  thirdRow.appendChild(third_items);
}


element.appendChild(firstRow);
element2.appendChild(secondRow);
element3.appendChild(thirdRow);

image_taken.src = "https://s.turbifycdn.com/aah/paulgraham/index-14.gif";
image_taken.style.width = "32em";
image_taken.style.marginTop = "20px";
image_paul.src = "https://s.turbifycdn.com/aah/paulgraham/bio-11.gif";
image_paul.style.marginTop = "20px";

titleOfIndex.textContent = "PAUL GRAHAM"
document.body.appendChild(titleOfIndex);
titleOfIndex.appendChild(image_paul);
document.body.appendChild(image_taken);
document.body.appendChild(ele);
document.body.appendChild(element);
document.body.appendChild(element2);
document.body.appendChild(element3);
