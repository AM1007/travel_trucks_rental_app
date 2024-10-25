import { useEffect, useRef, useState } from "react";
import EquipmentItem from "@components/EquipmentItem/EquipmentItem";
import css from "./EquipmentList.module.css";

const EquipmentList = ({ equipment }) => {
  const listRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const listElement = listRef.current;
    if (listElement.scrollHeight > 104) {
      setIsScrollable(true);
    } else {
      setIsScrollable(false);
    }
  }, [equipment]);

  return (
    <ul
      ref={listRef}
      className={`${css.equipmentList} ${isScrollable ? css.grab : ""}`}
    >
      {equipment.map(({ icon, label }) => (
        <EquipmentItem key={label} icon={icon} label={label} />
      ))}
    </ul>
  );
};

export default EquipmentList;
