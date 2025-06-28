let relStatusText = document.querySelector('.rel-status-text');

const relAvailableStatus = ['Married', 'Healthy', 'Medium', 'Unstable', 'Broken', 'Single', 'Divorced', 'Widowed', 'Complicated'];

let relStatus = relAvailableStatus[1];

relStatusText.textContent = relStatus;

switch (relStatus) {
    case 'Married':
        relStatusText.style.color = 'green';
        break;
    case 'Healthy':
        relStatusText.style.color = 'green';
        break;
    case 'Medium':
        relStatusText.style.color = 'yellow';
        break;
    case 'Unstable':
        relStatusText.style.color = 'orange';
        break;
    case 'Broken':
        relStatusText.style.color = 'red';
        break;
    case 'Single':
        relStatusText.style.color = 'blue';
        break;
    case 'Divorced':
        relStatusText.style.color = 'purple';
        break;
    case 'Widowed':
        relStatusText.style.color = 'gray';
        break;
    case 'Complicated':
        relStatusText.style.color = 'pink';
        break;
    default:
        relStatusText.style.color = 'black';
        break;
}


function sasiradaFBOpenIntent() {
    const sasiradaFBUrl = 'https://www.facebook.com/sasirada.zx.925260';
    
    window.location.href = sasiradaFBUrl;
}

function jittiFBOpenIntent() {
    const jittiFBUrl = 'https://www.facebook.com/chitti.phansuwan';
    
    window.location.href = jittiFBUrl;
}