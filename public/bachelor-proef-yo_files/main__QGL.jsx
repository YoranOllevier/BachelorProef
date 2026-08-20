import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=c39651ad"; const _jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=c39651ad"; const StrictMode = __vite__cjsImport1_react["StrictMode"];
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=c39651ad"; const createRoot = __vite__cjsImport2_reactDom_client["createRoot"];
import { createBrowserRouter, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=c39651ad";
import { AuthProvider } from "/src/contexts/AuthContext.jsx";
import "/src/index.css?t=1786807824375";
import Layout from "/src/Layout.jsx?t=1786790993777";
import Home from "/src/pages/Home/Home.jsx?t=1786811051536";
import NotFound from "/src/pages/NotFound/NotFound.jsx";
import Unauthorized from "/src/pages/NotFound/Unauthorized.jsx";
const router = createBrowserRouter([
    {
        element: /*#__PURE__*/ _jsxDEV(Layout, {}, void 0, false, {
            fileName: "C:/Users/yoran/OneDrive/Documenten/BachelorProef/React/BachelorProef/src/main.jsx",
            lineNumber: 14,
            columnNumber: 14
        }, this),
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/unauthorized',
                Component: Unauthorized
            },
            {
                path: '*',
                Component: NotFound
            }
        ]
    }
]);
createRoot(document.getElementById('root')).render(/*#__PURE__*/ _jsxDEV(StrictMode, {
    children: /*#__PURE__*/ _jsxDEV(AuthProvider, {
        children: /*#__PURE__*/ _jsxDEV(RouterProvider, {
            router: router
        }, void 0, false, {
            fileName: "C:/Users/yoran/OneDrive/Documenten/BachelorProef/React/BachelorProef/src/main.jsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "C:/Users/yoran/OneDrive/Documenten/BachelorProef/React/BachelorProef/src/main.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, this)
}, void 0, false, {
    fileName: "C:/Users/yoran/OneDrive/Documenten/BachelorProef/React/BachelorProef/src/main.jsx",
    lineNumber: 23,
    columnNumber: 3
}, this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cmljdE1vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VyUm91dGVyLCBSb3V0ZXJQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi9jb250ZXh0cy9BdXRoQ29udGV4dCc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQuanN4JztcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9wYWdlcy9Ib21lL0hvbWUuanN4JztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL3BhZ2VzL05vdEZvdW5kL05vdEZvdW5kLmpzeCc7XG5pbXBvcnQgVW5hdXRob3JpemVkIGZyb20gJy4vcGFnZXMvTm90Rm91bmQvVW5hdXRob3JpemVkLmpzeCc7XG5cbmNvbnN0IHJvdXRlciA9IGNyZWF0ZUJyb3dzZXJSb3V0ZXIoW1xuICB7XG4gICAgZWxlbWVudDogPExheW91dCAvPixcbiAgICBjaGlsZHJlbjogW1xuICAgICAgeyBwYXRoOiAnLycsIENvbXBvbmVudDogSG9tZSB9LFxuICAgICAgeyBwYXRoOiAnL3VuYXV0aG9yaXplZCcsIENvbXBvbmVudDogVW5hdXRob3JpemVkIH0sXG4gICAgICB7IHBhdGg6ICcqJywgQ29tcG9uZW50OiBOb3RGb3VuZCB9LFxuICAgIF0sXG4gIH1dKTtcblxuY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKS5yZW5kZXIoXG4gIDxTdHJpY3RNb2RlPlxuICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICA8Um91dGVyUHJvdmlkZXIgcm91dGVyPXtyb3V0ZXJ9IC8+XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gIDwvU3RyaWN0TW9kZT4sXG4pO1xuIl0sIm5hbWVzIjpbIlN0cmljdE1vZGUiLCJjcmVhdGVSb290IiwiY3JlYXRlQnJvd3NlclJvdXRlciIsIlJvdXRlclByb3ZpZGVyIiwiQXV0aFByb3ZpZGVyIiwiTGF5b3V0IiwiSG9tZSIsIk5vdEZvdW5kIiwiVW5hdXRob3JpemVkIiwicm91dGVyIiwiZWxlbWVudCIsImNoaWxkcmVuIiwicGF0aCIsIkNvbXBvbmVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7QUFBQSxTQUFTQSxVQUFVLFFBQVEsUUFBUTtBQUNuQyxTQUFTQyxVQUFVLFFBQVEsbUJBQW1CO0FBQzlDLFNBQVNDLG1CQUFtQixFQUFFQyxjQUFjLFFBQVEsbUJBQW1CO0FBQ3ZFLFNBQVNDLFlBQVksUUFBUSx5QkFBeUI7QUFDdEQsT0FBTyxjQUFjO0FBQ3JCLE9BQU9DLFlBQVksZUFBZTtBQUVsQyxPQUFPQyxVQUFVLHdCQUF3QjtBQUN6QyxPQUFPQyxjQUFjLGdDQUFnQztBQUNyRCxPQUFPQyxrQkFBa0Isb0NBQW9DO0FBRTdELE1BQU1DLFNBQVNQLG9CQUFvQjtJQUNqQztRQUNFUSx1QkFBUyxRQUFDTDs7Ozs7UUFDVk0sVUFBVTtZQUNSO2dCQUFFQyxNQUFNO2dCQUFLQyxXQUFXUDtZQUFLO1lBQzdCO2dCQUFFTSxNQUFNO2dCQUFpQkMsV0FBV0w7WUFBYTtZQUNqRDtnQkFBRUksTUFBTTtnQkFBS0MsV0FBV047WUFBUztTQUNsQztJQUNIO0NBQUU7QUFFSk4sV0FBV2EsU0FBU0MsY0FBYyxDQUFDLFNBQVNDLE1BQU0sZUFDaEQsUUFBQ2hCO2NBQ0MsY0FBQSxRQUFDSTtrQkFDQyxjQUFBLFFBQUNEO1lBQWVNLFFBQVFBIn0=