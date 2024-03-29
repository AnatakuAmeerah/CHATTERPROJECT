
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// import Landing from '../../features/landing/containers/Landing';
 
const Landing = lazy(
  () => import('../../features/landing/containers/Landing')
)
const RegisterPage = lazy(
  () => import('../../features/users/containers/RegisterPage')
);

const DefaultLayout = lazy(() => import('./DefaultLayout'));
const HomeLayout = lazy(() => import('./HomeLayout'));

const Feeds = lazy(() => import('../../features/post/containers/Feeds'));
const Explore = lazy(() => import('../../features/tags/containers/Explore'));
const Bookmarks = lazy(
  () => import('../../features/post/containers/BookMarks')
);

const TagDetails = lazy(
  () => import('../../features/tags/containers/TagDetails')
);

const Profile = lazy(() => import('../../features/profile/containers/Profile'));
const EditProfile = lazy(
  () => import('../../features/profile/containers/EditProfile')
);

const Dashboard = lazy(
  () => import('../../features/dashboard/containers/Dashboard')
);

const Posts = lazy(() => import('../../features/dashboard/components/Posts'));

const Drafts = lazy(() => import('../../features/dashboard/components/Drafts'));

const Followers = lazy(
  () => import('../../features/dashboard/components/Followers')
);

const Following = lazy(
  () => import('../../features/dashboard/components/Following')
);

const FollowingTags = lazy(
  () => import('../../features/dashboard/components/FollowingTags')
);

const PostDetails = lazy(
  () => import('../../features/post/containers/PostDetails')
);

const Search = lazy(() => import('../../features/search/containers/Search'));

const EditPost = lazy(() => import('../../features/post/components/EditPost'));

const CreatePost = lazy(
  () => import('../../features/post/containers/CreatePost')
);
const EditComment = lazy(
  () => import('../../features/comment/components/EditComment')
);

const DeleteComment = lazy(
  () => import('../../features/comment/utils/DeleteComment')
);

const Error = lazy(() => import('../components/Error'));

const ConfigRoute = () => {
  return (
    <Routes>
       <Route path='landing' element={<Landing />} />
      <Route path='create-account' element={<RegisterPage />} />
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<Feeds />} />
        <Route path='explore' element={<Explore />} />
        <Route path='bookmarks' element={<Bookmarks />} />
        <Route path='tag/:tagname' element={<TagDetails />} />
        <Route path='search' element={<Search />} />
      </Route>

      <Route element={<DefaultLayout />}>
        <Route path='/:user/:title' element={<PostDetails />} />
        <Route path=':username' element={<Profile />} />
        <Route path='edit-profile' element={<EditProfile />} />
        <Route path='dashboard' element={<Dashboard />}>
          <Route index element={<Posts />} />
          <Route path='drafts' element={<Drafts />} />
          <Route path='followers' element={<Followers />} />
          <Route path='following' element={<Following />} />
          <Route path='following_tags' element={<FollowingTags />} />
        </Route>
        <Route path='delete-comment' element={<DeleteComment />} />
        <Route path='edit-comment' element={<EditComment />} />
        
      </Route>

      {/* Unauthorized routes */}
      <Route path='edit-post' element={<EditPost />} />
      <Route
        path='create-post'
        element={<CreatePost currentPostDataToEdit={undefined} />}
      />
      <Route path='*' element={<Error />} />
    </Routes>
  );
};

export default ConfigRoute;

