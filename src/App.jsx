import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashbaord from "./pages/Dashbaord";
import DashOverview from "./pages/DashOverview";
import Community from "./pages/Community";
import Invest from "./pages/Invest";
import Save from "./pages/Save";
import ThriftSave from "./pages/ThriftSave";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="dashboard/" element={<Dashbaord />}>
          <Route index="true" element={<DashOverview />} />
          <Route path="community" element={<Community />} />
          <Route path="invest" element={<Invest />} />
          <Route path="save" element={<Save />} />
          <Route path="save-thrift" element={<ThriftSave />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
