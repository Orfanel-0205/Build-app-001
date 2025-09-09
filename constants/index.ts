// Icon imports
import addUser from '../assets/icons/add-user.png';
import applyJob from '../assets/icons/apply-job.png';
import calendar from '../assets/icons/calendar.png';
import careerIcon from '../assets/icons/career-icon.png';
import coursesIcon from '../assets/icons/courses-icon.png';
import dashboardIcon from '../assets/icons/dashboard-icon.png';
import detailsIcon from '../assets/icons/details-icon.png';
import filterIcon from '../assets/icons/filter-icon.png';
import login from '../assets/icons/login.png';
import mail from '../assets/icons/mail.png';
import messageIcon from '../assets/icons/message-icon.png';
import notificationIcon from '../assets/icons/notification-icon.png';
import password from '../assets/icons/password.png';
import saveIcon from '../assets/icons/save-icon.png';
import save from '../assets/icons/save.png';
import settingIcon from '../assets/icons/setting-icon.png';
import skillBag from '../assets/icons/skill-bag.png';
import skillIcon from '../assets/icons/skill-icon.png';
import skills2 from '../assets/icons/skills-2.png';
import tagIcon from '../assets/icons/tag-icon.png';
import uploadIcon from '../assets/icons/upload-icon.png';
import user from '../assets/icons/user.png';

// Image imports
import adaptiveIcon from '../assets/images/adaptive-icon.png';
import favicon from '../assets/images/favicon.png';
import icon from '../assets/images/icon.png';
import partialReactLogo from '../assets/images/partial-react-logo.png';
import reactLogo from '../assets/images/react-logo.png';
import reactLogo24x from '../assets/images/react-logo@2x.png';
import reactLogo3x from '../assets/images/react-logo@3x.png';
import splash from '../assets/images/splash.png';
import ss1RemoveBg from '../assets/images/ss1-removebg.png';

// Icons constant with IDs
export const icons = {
  addUser: {
    id: 'add-user',
    source: addUser,
    alt: 'Add User Icon'
  },
  applyJob: {
    id: 'apply-job',
    source: applyJob,
    alt: 'Apply Job Icon'
  },
  calendar: {
    id: 'calendar',
    source: calendar,
    alt: 'Calendar Icon'
  },
  careerIcon: {
    id: 'career-icon',
    source: careerIcon,
    alt: 'Career Icon'
  },
  coursesIcon: {
    id: 'courses-icon',
    source: coursesIcon,
    alt: 'Courses Icon'
  },
  dashboardIcon: {
    id: 'dashboard-icon',
    source: dashboardIcon,
    alt: 'Dashboard Icon'
  },
  detailsIcon: {
    id: 'details-icon',
    source: detailsIcon,
    alt: 'Details Icon'
  },
  filterIcon: {
    id: 'filter-icon',
    source: filterIcon,
    alt: 'Filter Icon'
  },
  login: {
    id: 'login',
    source: login,
    alt: 'Login Icon'
  },
  mail: {
    id: 'mail',
    source: mail,
    alt: 'Mail Icon'
  },
  messageIcon: {
    id: 'message-icon',
    source: messageIcon,
    alt: 'Message Icon'
  },
  notificationIcon: {
    id: 'notification-icon',
    source: notificationIcon,
    alt: 'Notification Icon'
  },
  password: {
    id: 'password',
    source: password,
    alt: 'Password Icon'
  },
  saveIcon: {
    id: 'save-icon',
    source: saveIcon,
    alt: 'Save Icon'
  },
  save: {
    id: 'save',
    source: save,
    alt: 'Save Icon'
  },
  settingIcon: {
    id: 'setting-icon',
    source: settingIcon,
    alt: 'Setting Icon'
  },
  skillBag: {
    id: 'skill-bag',
    source: skillBag,
    alt: 'Skill Bag Icon'
  },
  skillIcon: {
    id: 'skill-icon',
    source: skillIcon,
    alt: 'Skill Icon'
  },
  skills2: {
    id: 'skills-2',
    source: skills2,
    alt: 'Skills Icon'
  },
  tagIcon: {
    id: 'tag-icon',
    source: tagIcon,
    alt: 'Tag Icon'
  },
  uploadIcon: {
    id: 'upload-icon',
    source: uploadIcon,
    alt: 'Upload Icon'
  },
  user: {
    id: 'user',
    source: user,
    alt: 'User Icon'
  }
} as const;

// Images constant with IDs
export const images = {
  adaptiveIcon: {
    id: 'adaptive-icon',
    source: adaptiveIcon,
    alt: 'Adaptive Icon'
  },
  favicon: {
    id: 'favicon',
    source: favicon,
    alt: 'Favicon'
  },
  icon: {
    id: 'icon',
    source: icon,
    alt: 'App Icon'
  },
  partialReactLogo: {
    id: 'partial-react-logo',
    source: partialReactLogo,
    alt: 'Partial React Logo'
  },
  reactLogo: {
    id: 'react-logo',
    source: reactLogo,
    alt: 'React Logo'
  },
  reactLogo24x: {
    id: 'react-logo-2x',
    source: reactLogo24x,
    alt: 'React Logo 2x'
  },
  reactLogo3x: {
    id: 'react-logo-3x',
    source: reactLogo3x,
    alt: 'React Logo 3x'
  },
  splash: {
    id: 'splash',
    source: splash,
    alt: 'Splash Screen'
  },
  ss1RemoveBg: {
    id: 'ss1-removebg',
    source: ss1RemoveBg,
    alt: 'Screenshot 1 No Background'
  }
} as const;

// Navigation items using the icons
export const navigationItems = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    icon: icons.dashboardIcon,
    path: '/dashboard'
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: icons.skillIcon,
    path: '/skills'
  },
  {
    id: 'courses',
    name: 'Courses',
    icon: icons.coursesIcon,
    path: '/courses'
  },
  {
    id: 'jobs',
    name: 'Jobs',
    icon: icons.careerIcon,
    path: '/jobs'
  },
  {
    id: 'messages',
    name: 'Messages',
    icon: icons.messageIcon,
    path: '/messages'
  },
  {
    id: 'settings',
    name: 'Settings',
    icon: icons.settingIcon,
    path: '/settings'
  }
] as const;

// Quick actions using the icons
export const quickActions = [
  {
    id: 'invite-user',
    name: 'Invite User',
    icon: icons.addUser,
    action: 'invite'
  },
  {
    id: 'create-course',
    name: 'Create Course',
    icon: icons.coursesIcon,
    action: 'create-course'
  },
  {
    id: 'post-job',
    name: 'Post Job',
    icon: icons.applyJob,
    action: 'post-job'
  }
] as const;

// Export types for TypeScript
export type IconKey = keyof typeof icons;
export type ImageKey = keyof typeof images;
export type NavigationItem = typeof navigationItems[number];
export type QuickAction = typeof quickActions[number];