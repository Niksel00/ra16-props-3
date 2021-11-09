import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";

export default function MessageHistory({ list }) {

  const ComponentsCollection = {
    message: Message,
    response: Response,
    typing: Typing,
  };

  return (
    <ul>
      {list.map((item) => {
        const ComponentName = ComponentsCollection[item.type];
        return <ComponentName key={item.id} from={item.from} message={{ time: item.time, text: item.text }} />
      })}
    </ul>
  );
}

MessageHistory.defaultProps = {
  list: []
};