import { Text } from "../Text/Text";
import "./List.scss";

export function List({ data = [] }) {
  return data.map((d, index) => {
    return (
      <>
        <div className="list-wrapper" key={index}>
          <Text>{d}</Text>
        </div>
      </>
    );
  });
}
