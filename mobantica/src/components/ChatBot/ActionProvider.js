class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet() {
      const greetingMessage = this.createChatBotMessage("Hello! How can I help?");
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, greetingMessage],
      }));
    }
  }
  
  export default ActionProvider;
  