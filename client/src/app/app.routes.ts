import { Routes } from '@angular/router';
import { Home} from '../app/pages/home/home';
import { Top } from './pages/top/top';
import { Contests } from './pages/contests/contests';
import { Gym } from './pages/gym/gym';
import { Problemset } from './pages/problemset/problemset';
import { Groups } from './pages/groups/groups';
import { Rating} from './pages/rating/rating';
import { About } from './pages/about/about';
import { Help } from './pages/help/help';
import { SignIn } from './pages/sign-in/sign-in';
import { SignUp } from './pages/sign-up/sign-up';
import { Discussion } from './pages/discussion/discussion';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'top', component: Top },
  { path: 'discussion', component: Discussion },
  { path: 'contests', component: Contests },
  { path: 'gym', component: Gym },
  { path: 'problemset', component: Problemset },
  { path: 'groups', component: Groups },
  { path: 'rating', component: Rating },
  { path: 'about', component: About },
  { path: 'help', component: Help },
  { path: 'signin', component: SignIn },
  { path: 'signup', component: SignUp }
];
