import { IMenuData } from "@/types/menu-data-type";

const menu_data:IMenuData[] = [
  {
    id:1,
    link:'/',
    title:'Home'
  },
  {
    id:2,
    link:'/job-list-v1',
    title:'Job'
  },
  {
    id:3,
    link:'#',
    title:'Explore',
     sub_menus:[
      {title:'Candidates',link:'/candidates-v1'},
      {title:'Company',link:'/company-v1'},
    ]
  },
  {
    id:4,
    link:'/blog-v1',
    title:'Blog'
  },
  {
    id:5,
    link:'/contact',
    title:'Contact'
  },
  {
    id:6,
    link:'/dashboard/employer-dashboard',
    title:'Dashboard',
    sub_menus:[
      {link:'/dashboard/candidate-dashboard',title:'Candidate Dashboard'},
      {link:'/dashboard/employ-dashboard',title:'Employer Dashboard'},
    ]
  }
]

export default menu_data;