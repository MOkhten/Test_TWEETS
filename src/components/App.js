import { Routes, Route} from "react-router-dom";
import { lazy } from 'react';
import Layout from "components/Layout/Layout";

const Home = lazy(() => import('screens/Home/Home'));
const Tweets = lazy(() => import("screens/Tweets/Tweets"));


function App() {
   return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets/>}/>
          <Route path="*" element={<Home />} />
          </Route>
        </Routes>
     
    </div>
  );
}

export default App;

