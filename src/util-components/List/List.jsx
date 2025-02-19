import { Text } from "../Text/Text";
import "./List.scss";
import HighlightText from "../../utils/HighlightText";

export function List({ data = [], listClass }) {
  return (
    <div className="list-wrapper">
      {data.map((d, index) => {
        console.log(d);
        return (
          <Text classes={listClass} key={index}>
            <HighlightText text={d} />
          </Text>
        );
      })}
    </div>
  );
}
