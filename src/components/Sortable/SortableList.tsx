import { Reorder } from "framer-motion";
import { TSortableData } from "../Sortable/Sortable";
import { ReactElement } from "react";

export interface ISortableList<T extends Partial<TSortableData>> {
  items: T[];
  renderItem: (item: T, index: number) => ReactElement;
}

export const SortableList = <T extends Partial<TSortableData>>({
  items,
  renderItem,
}: ISortableList<T>) => {
  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={() => {}}
      className="overflow-y-auto my-4 h-full space-y-4"
    >
      {items.map((item, index) => (
        <Reorder.Item
          drag={false}
          value={item}
          key={item.id}
          style={{ originX: "0px" }}
        >
          {renderItem(item, index)}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};
