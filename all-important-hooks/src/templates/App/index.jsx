import React, { Suspense } from 'react';
import P from 'prop-types';

import AppFunctionStylesWrapper from '../../components/AppFunctionStylesWrapper';
import { PostsProvider } from '../../contexts/PostsProvider';
import SampleProvider from '../../contexts/SampleProvider';
import { AppClassErrorBoundary } from '../AppClassErrorBoundary';

const AppClass = React.lazy(() => import('../AppClass'));
const AppFunction = React.lazy(() => import('../AppFunction'));

import './styles.css';

AppRouter.defaultProps = {
  type: 'function',
};

AppRouter.propTypes = {
  type: P.string.isRequired,
};

export default function AppRouter(props) {
  if (props.type === 'function')
    return (
      <Suspense fallback={<div className="lazy-loading-div">Loading...</div>}>
        <PostsProvider>
          <SampleProvider>
            <AppFunctionStylesWrapper>
              <AppFunction />
            </AppFunctionStylesWrapper>
          </SampleProvider>
        </PostsProvider>
      </Suspense>
    );
  return (
    <Suspense fallback={<div className="lazy-loading-div">Loading...</div>}>
      <AppClassErrorBoundary>
        <AppClass />
      </AppClassErrorBoundary>
    </Suspense>
  );
}
