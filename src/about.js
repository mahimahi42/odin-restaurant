const renderAboutContent = () => {
    const header = document.createElement('h2');
    const about = document.createElement('p');

    header.textContent = 'About Us';
    about.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat a tortor sit amet tincidunt. Pellentesque a condimentum purus. Aenean blandit sit amet sem eu placerat. In consectetur luctus dui. Sed ac bibendum urna, sed ultricies dolor. Pellentesque a tellus quis ante congue congue. Fusce auctor placerat libero ac interdum.\n\nPhasellus vulputate dignissim leo, quis lobortis mi feugiat semper. Vestibulum vitae vehicula massa. Mauris auctor dictum tristique. Morbi neque tortor, aliquet id diam vel, fringilla porttitor risus. Sed a pulvinar neque. Suspendisse suscipit facilisis scelerisque. Duis posuere mattis eros, nec fringilla tortor viverra sed. In nisl felis, suscipit eu purus cursus, luctus euismod ex. Vivamus laoreet condimentum ex, eget molestie erat volutpat id. Donec lacinia felis vulputate, rutrum nunc eget, maximus lacus. Donec vehicula sapien tellus, ut porttitor dolor venenatis vitae.';

    const content = document.querySelector('#content');
    content.appendChild(header);
    content.appendChild(about);
}

export default renderAboutContent;
