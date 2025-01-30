import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { authProvider, dataProvider, liveProvider } from "./providers";

import { DashboardPage, ForgotPassword, Login, Register } from "./pages";

import {
  useNotificationProvider
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { Layout } from "./components/layout";
import { resources } from "./config/resources";
import Mylevel from "./pages/MyLevel";




function App() {
  return (
    <BrowserRouter>
    
      <RefineKbarProvider>
      
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider}
                liveProvider={liveProvider}
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                resources={resources}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "jVxvXJ-pYc33s-Qk6geb",
                  liveMode: "auto",
                }}
              >
                <Routes>
                  
                  <Route path="/login" element={<Login />}/>
                  <Route path="/register" element={<Register />}/>
                  <Route path="/forgetpassword" element={<ForgotPassword />}/>


                <Route
                  element={
                    <Authenticated
                      key="authenticated-layout"
                      fallback={<CatchAllNavigate to="/login" />}
                    >
                      <Layout>
                        <Outlet />
                      </Layout>
                    </Authenticated>}
                    >
                      <Route index element={<DashboardPage />}/>
                      <Route path="/my-level" element={<Mylevel />}/>

                    </Route>
                </Routes>

                

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
