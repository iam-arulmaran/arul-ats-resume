import { Text } from "../Text/Text";
import "./List.scss";

export function List({ data = [], listClass }) {
  return (
    <div className="list-wrapper">
      {data.map((d, index) => {
        return (
          <Text classes={listClass} key={index}>
            {d}
          </Text>
        );
      })}
    </div>
  );
}
