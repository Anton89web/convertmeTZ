import {activeItem} from "./activeItem";

const arrContent = [
  [
    'Create and edit video content for multi-platform use and distribution for social media channels (Facebook, Youtube, Instagram, Snapchat, IGTV, Facebook Stories and Instagram Stories).',
    'Design & Create highly engaging industry-related content in both photo, gif & video format',
    'Publish Posts on various social media channels',
    'Promote content on social networks and monitor engagement (e.g. comments and shares)',
    'Research industry-related topics',
    'Editing audio and sound design on projects',
    'Engage in opportunities to develop original content and concepts for web and mobile',
    'Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.',
    'Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels',
  ],
  [
    'Requirements',
    'Design & Create highly engaging industry-related content in both photo, gif & video format',
    'Instagram, Tiktok and YouTube, adapting content to suit different channels',
    'Publish Posts on various social media channels',
    'Editing audio and sound design on projects',
    'Promote content on social networks and monitor engagement (e.g. comments and shares)',
    'Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest',
    'Engage in opportunities to develop original content and concepts for web and mobile',
    'Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.',
  ],
  [
    'Responsibilities',
    'Design & Create highly engaging industry-related content in both photo, gif & video format',
    'Engage in opportunities to develop original content and concepts for web and mobile',
    'Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.',
    'Publish Posts on various social media channels',
    'Promote content on social networks and monitor engagement (e.g. comments and shares)',
    'Research industry-related topics',
    'Editing audio and sound design on projects',
    'Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels',
  ],
]
const ul = document.querySelector('.details__list-items')
const tabs = document.querySelectorAll('.details__tab')

function insertContent(content) {
  ul.innerHTML = ''
  content.forEach(text => {
    ul.insertAdjacentHTML("beforeend",
      `<li class="details__list-item">${text}</li>`)
  })
}

function createTabContent() {
  activeItem(tabs, 'details__tab-active')
  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
      insertContent(arrContent[i])
    })
  })
}

createTabContent()
insertContent(arrContent[0])
