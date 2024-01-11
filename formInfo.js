document.addEventListener('DOMContentLoaded', () => {
    console.log("script has been loaded");
    const submitButton = findSubmitButton();
    submitButton?.addEventListener('click', getFormInfo)
});

const findSubmitButton = () => {
    const submitButton = document.querySelector('button[type="submit"]');
    return submitButton;
}

const getFormInfo = () => {
    const form = document.querySelector('form');
    const json = {};
    json['UTM'] = getGoogleAdCookie()
    if(!form) return;
    
    const inputElements = form.elements;
    Array.from(inputElements).forEach(el => {
        if(!el.tagName === 'INPUT') return;
        const label = document.querySelector('label[for="' + el.id + '"]')?.textContent;
        const trimmed = label?.toLowerCase().replace(/[^a-z]/g, '')
        const content = el.value;
        if(!trimmed) return;
        json[trimmed] = content;
    });
    
    console.log(json)
}

const getGoogleAdCookie = () => {
    const currentUrl = window.location.href;
    const cookie = currentUrl.split('?');
    const params = cookie.length > 1 ? cookie[1] : '';
    return params;
}