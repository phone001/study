class App extends React.Component {
    render() {
        return (
            <ul>
                <li>list num</li>
                <li>list num</li>
                <li>list num</li>
            </ul>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);