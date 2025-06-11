const renderMenuContent = () => {
    const menuList = document.createElement('ul');

    for (let i = 0; i < 5; i++) {
        const menuItem = document.createElement('li');
        const menuItemContent = document.createElement('div');
        const menuItemTitle = document.createElement('h5');
        const menuItemDescription = document.createElement('p');

        menuItemTitle.textContent = `Menu Item ${i}`;
        menuItemDescription.textContent = `Item ${i} is a really tasty dish!`;

        menuItemContent.appendChild(menuItemTitle);
        menuItemContent.appendChild(menuItemDescription);

        menuItem.appendChild(menuItemContent);

        menuList.appendChild(menuItem);
    }

    document.querySelector('#content').appendChild(menuList);
}

export default renderMenuContent;
