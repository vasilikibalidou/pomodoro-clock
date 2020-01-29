function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "timer",




























    () => {
      let mins = Math.floor(this.state.time / 60);
      let secs = this.state.time - mins * 60;
      secs = secs < 10 ? '0' + secs : secs;
      mins = mins < 10 ? '0' + mins : mins;
      return mins + ":" + secs;
    });_defineProperty(this, "countdown",



    () => {
      if (this.state.active === 'off') {
        this.start = setInterval(() => this.setState({
          time: this.state.time - 1,
          active: 'on' }),
        1000);
      } else if (this.state.active === 'on') {
        this.setState({
          time: this.state.time,
          active: 'off' });

        clearInterval(this.start);
      }
    });_defineProperty(this, "reset",

    () => {
      this.setState({
        break: 5,
        session: 25,
        mode: 'Session',
        time: 25 * 60,
        active: 'off' });

      clearInterval(this.start);
      this.audio.pause();
      this.audio.currentTime = 0;
    });_defineProperty(this, "handleIncBreak",

    () => {
      if (this.state.break < 60) {
        this.setState({
          break: this.state.break + 1 });

      }
    });_defineProperty(this, "handleIncSession",

    () => {
      if (this.state.session < 60) {
        this.setState({
          session: this.state.session + 1,
          time: (this.state.session + 1) * 60 });

      }
    });_defineProperty(this, "handleDecBreak",

    () => {
      if (this.state.break > 1) {
        this.setState({
          break: this.state.break - 1 });

      }
    });_defineProperty(this, "handleDecSession",

    () => {
      if (this.state.session > 1) {
        this.setState({
          session: this.state.session - 1,
          time: (this.state.session - 1) * 60 });

      }
    });this.state = { break: 5, session: 25, mode: 'Session', time: 25 * 60, active: 'off' };}componentDidUpdate(prevProps, prevState) {if (prevState.time === 0 && prevState.mode === 'Session') {this.audio.play();this.audio.currentTime = 0;this.setState({ time: this.state.break * 60, mode: 'Break' });} else if (prevState.time === 0 && prevState.mode === 'Break') {this.audio.play();this.audio.currentTime = 0;this.setState({ time: this.state.session * 60, mode: 'Session' });}}

  render() {
    return (
      React.createElement("div", { id: "clock", class: "container" },
      React.createElement("h1", null, "Pomodoro Clock"),
      React.createElement("div", { class: "row" },
      React.createElement("div", { id: "break-label", class: "col-sm-6" }, "Break Length ",
      React.createElement("br", null),
      React.createElement("button", { id: "break-decrement", class: "btn", onClick: this.handleDecBreak }, "-"),
      React.createElement("span", { id: "break-length" }, this.state.break),
      React.createElement("button", { id: "break-increment", class: "btn", onClick: this.handleIncBreak }, "+")),


      React.createElement("div", { id: "session-label", class: "col-sm-6" }, "Session Length ",
      React.createElement("br", null),
      React.createElement("button", { id: "session-decrement", class: "btn", onClick: this.handleDecSession }, "-"),
      React.createElement("span", { id: "session-length" }, this.state.session),
      React.createElement("button", { id: "session-increment", class: "btn", onClick: this.handleIncSession }, "+"))),



      React.createElement("div", { id: "timer-label" },
      React.createElement("h2", null, this.state.mode),
      React.createElement("h2", { id: "time-left" }, this.timer()),
      React.createElement("button", { id: "start_stop", class: "btn", onClick: this.countdown }, "Start / Stop"),
      React.createElement("button", { id: "reset", class: "btn", onClick: this.reset }, "Reset")),


      React.createElement("audio", { id: "beep", src: "http://soundbible.com/grab.php?id=1598&type=wav", ref: ref => this.audio = ref })));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("app"));