import { Posts } from '../../components/Posts';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { PostsProvider } from '../../contexts/PostsProvider';

export function App() {
  return (
    <PostsProvider>
      <div>
        <Posts />
      </div>
    </PostsProvider>
  );
}
