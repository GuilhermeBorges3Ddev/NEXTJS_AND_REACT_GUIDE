# NEXTJS AND REACT GUIDE

## v1.2.0

In these repository you'll find five main projects organized into 5 different folders: **all-important-hooks/**, **applying-all-important-hooks/**, **project-one/**, **react-router-dom-v5** and **react-router-dom-v6**. Each section bellow contains the explanation of main concepts what i've been using on it; feel free to clone this repo and explore the features yourself. Have a nice read and play cool!

# "project-one"

First of all, install the project dependencies using `npm i` command. After that just run `npm start` to see the project working on: **http://localhost:3000/**. You will see exactly these design, click on the link to see: https://photos.app.goo.gl/zmjrJ2uZYsrG963W9

At the home page was created an "_compound react components arch_". We've a main **templates/** folder, any folder inside of it is a page. The **components/** folder has a global view of components, that can be used inside of wherever template which wants:

```mermaid
graph LR
A[Components] --> B(Button)
A --> C(PostsCard)
A --> D(Posts)
A --> E(TextInput)
```

There are **unitary tests** implemented over each component, it doesn't affect each other:

- You can run one of the following commands to test the components on isolated mode: `npm run test-button`, `npm run test-postcard`, `npm run test-posts` or `npm run test-texting`.

> As an alternative you can run all of them integrated into a single test: `npm test`

- Also you can see the coverage report of the tests: `npm run coverage`.

The main idea of these project was create a UI for a dynamic search over items on the interface, this is fast and async as you can see when you run it; although unitary and integrated tests were implemented to guarantee a certain level of reliability and endurance. In the file **index.jsx** on the root of the project you can change the type "class" to "function" you will see a HOC changing the view from a _RCC(React Class Component)_ to a _RFC(React Functional Component)_. When you click on the "Load more posts" button, the results containing more posts will appear instantly, because all the posts were loaded before, appearing only by demand.

# "all-important-hooks"

As mentioned in the section above, install the project dependencies using `npm i` command and after just run `npm start` to see the project working on: **http://localhost:3001/**. You will see the same screen that you can see in the link: https://photos.app.goo.gl/cVDDVymYvEMykhTGA. To start our understanding about the project, go to the filepath **/src/templates/App** (remember that the compound React pattern says that all folders inside **templates/** are pages of the app); in these file you will see a _AppRouter_ functional component, it uses _React.lazy()_ concept to render the pages wrapped by a `<Suspense fallback={<div className="lazy-loading-div">Loading...</div>} />`, to evolve a initial render tag while the stuffs have been loading:

```mermaid
sequenceDiagram
Browser->>RenderLayer: props.type === 'function'
RenderLayer-->>Browser: <PostsProvider>{2 more Providers inside + AppFunction}</PostsProvider>
Browser->>RenderLayer: props.type === 'class'(or anything)
RenderLayer-->>Browser: <AppClassErrorBoundary><AppClass /></AppClassErrorBoundary>
```

Continuing our understanding about the "RenderLayer" mentioned in the diagram, if the programmer pass the type prop "class" for example, he'll see a completely different UI: https://photos.app.goo.gl/k1uDNBC8VWejSMEx5

These `<AppClass>` component has an important lifecycle method to check if the counter value reached the value of 10; reaching the value the interface throws an error: _"Counter value couldn't be more than 10"_. This error is invoked on purpose, rendering another page: https://photos.app.goo.gl/LPXSvqRErxw3heaw6. Who has the responsibility to deal with errors is the **/templates/AppClassErrorBoundary/index.js**, this file has an `getDerivedStateFromError(error)` and `componentDidCatch(error, errorInfo)` to compose an **error boundary** for the AppClass component. That's why the new interface of error is generated.

And the another component to be understood is `<AppFunction />`. It's wrapped by 3 providers from the _React ContextAPI_: **PostsProvider**, **SampleProvider** and **AppFunctionStylesWrapper**, all providers are inside **/contexts** folder and has the same architecture within the same files and names, what is explained on the following diagram:

| FileName   | Functionality                                                           |
| ---------- | ----------------------------------------------------------------------- |
| actions.js | `Methods who trigger dispatches from the useReducer() hook`             |
| context.js | `Just a named const exportation of the hook createContext()`            |
| data.js    | `Named object const exportation of useReducer() initial data`           |
| index.jsx  | `Is the Provider, who uses context.js file populating the object value` |
| reducer.js | `Receive a state and an action to trigger a new value for the state`    |
| types.js   | `Typed data consts which can be used in reducer.js or action.js files`  |

To complete the understanding about these project, the **PostsProvider** exposes the <u>postsState</u> and the <u>postDispatch</u>; the state has the posts content and the dispatch method is used to dispatch an action, who triggers the posts all over the layout, see the following code to understand:

`useEffect(() => {
Actions.loadPosts(postsDispatch);
}, [postsDispatch]);`

The **SampleProvider** is the one responsible for exposing <u>sampleState</u> and <u>sampleDispatcher</u>; the state here is an object, who has the information about the light and dark theme, you can switch the theme on real time, this behavior is triggered by the dispatch, the actions "returnToOldBg"(dark) and "changeForNewBg"(light) call these dispatch and execute this action. Observe the following code see it happen:

```typescript
<div
	id="wrapperAll"
	className="App"
	style={{
	background: sampleState.background,
	color: sampleState.color,
		overflowX: useMediaQuery('(min-width: 1200px)') ?  'hidden'  :  'scroll',
	}}
>
	<AppMenuProvider>
		<AppMenu />
	</AppMenuProvider>
<div>

<button
	style={{ marginRight: '10px', background: 'blue', color: 'white' }}
	onClick={() => returnToOldBg(sampleDispatcher)}
>
Light theme
</button>

<button
	style={{ marginRight: '10px', background: 'black', color: 'white' }}
	onClick={() => changeForNewBg(sampleDispatcher)}
>
Dark theme
</button>
.... continue
```

The last provider to understand is the **AppMenuProvider**, who only wrap a single component: AppMenu. Inside of the AppMenu the <u>MenuContext</u> is used, exposing the menuDispatcher and 3 actions: changeLeftMenuItem(), changeCenterMenuItem() and changeRightMenuItem(), each action here is responsible to reverse the menu items text and gives an user alert warning. With the providers and his structures explained go into the **hooks/** folder and see the custom hooks implemented if you want.

# "applying-all-important-hooks"

As saw in the 2 projects above, install the project dependencies using `npm i` command and after just run `npm start` to see the project working on: **http://localhost:3002/**. If you observe the file <i>/templates/Home/index,jsx</i> you will see the 6 actions created in factory file _buildActions.js_:

- **actions.increase()**: Make the counter displayed in the UI be increased with the positive value +1.
- **actions.decrease()**: Make the counter displayed in the UI be decreased with the negative value -1.
- **actions.reset()**: Calls the state value of counter to zero and the loading value to false.
- **actions.setCounter()**: This action receives a payload with the counter value, you can update the value passing -10 or +10 per example. But it's only expected to be passed something like that: `{counter: 10}`.
- **actions.asyncIncrease()**: When this action is triggered, firstly is setted the **ASYNC_INCREASE_START**, who sets the loading value to true, awaiting another async function call, in these case the second action: **ASYNC_INCREASE_END**, who makes the loading state be false again and the counter value to +1 added in the current value .
- **actions.asyncError()**: Firstly calls the **ASYNC_INCREASE_START** either, giving the loading value to true. And after the action **ASYNC_INCREASE_ERROR** is setted, putting the loading value to false, but before, the Promise() fires an proposal error.

Those actions are displayed by buttons, you'll note it when you interact with the UI: https://photos.app.goo.gl/yPrNp2YFsN87tJVDA.

If you wanna understand the deep side of the code, see the <u>CounterContext</u>, it's the one and only Context. The only different file in this project is the <i>buildActions.js</i>, but if you read the <i>actionTypes.js</i> it has an ACTIONS_PREFIX constant, it works as a suffix to all other actions in this file. However, these project is simple, the only additional information here is the async actions and the hook **useCounterContext()**, which makes the developer pass a context to the hook, otherwise an Error is generated to avoid errors on the use of this custom hook.

# "react-router-dom-v5"

These project was created to exemplify the core functionalities of **react-router-dom 5.2.0** , first of all, install the project dependencies using `npm i` command and after just run `npm start` to see the project working on: **http://localhost:3003/**. You will see the same screen that you can see in the link:
https://photos.app.goo.gl/GxEnAwFnXD3obKmJ9.

The screen above is seen cause the route matches with one of three routes registered into **/src/index.jsx**. Let's understand the code looking close to the this file:

```typescript
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/products/:category?/:id?" component={Products} />
        <Route path="/" component={App} exact />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
```

Beyond the spoken route, we've other important path, the **/products/:category?/:id?**, these route contains two optional URIs: _category_ and _id_. If you digit only the first param passing the value "drinks", you will compose the route: **/products/drinks**. Pressing enter the following screen wil be seen:
https://photos.app.goo.gl/ib3MAeCksRgYPYAz8

So, how the component **/src/templates/Products/index.jsx** knows that **"/:category?"** param was passed and the **"/:id?"** don't? That's the first hook that i tested, the **useParams()**, and i extracted the <u>category and the id</u>. Based on that 2 variables extracted values i made a conditional rendering, if the user fullfil both he will see a version of the component, totally different than just **"/:category?"** . Suppose that the user wrote the route **/products/drinks/14444**, if he visit it he will see exactly the image bellow:
https://photos.app.goo.gl/UJeVKGVvhuDVn9St5

The other route registered is a fallback when the desired pathname does not matches with the other two valid paths, it's the `<Route path="*" component={Page404} />`. These **Page404** component can be read into the file **/src/templates/Page404/index.jsx**, inside of it we've a **useLocation( )** hook to get the pathname searched by the user, if he type a nonexistent route like **"/products/cccccccccccccccc"**, he will see the following page opened:
https://photos.app.goo.gl/iL8WLhDWTPne7apk8

Inside of that page the user can see the typed route by him and the the available paths too. By the end, we have another hook called, the **useHistory( )**, which is used to redirect the user for the home page again, before 10 seconds after the 404 page appear. As you can see these project is pretty simple and contains the main concepts of react-router-dom on the v5. In the following project you will note some differences over the v6.
