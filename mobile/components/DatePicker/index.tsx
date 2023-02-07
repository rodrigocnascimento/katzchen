import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { IInputIcon, iconCreator } from "../../components/helpers/icon.creator";

import { TouchableOpacity, View } from "react-native";

import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import Input from "../Input";

interface DatePickerProps {
  inputName: string;
  inputPlaceholder?: string;
  icon?: IInputIcon;
  onValueChange: (text: string | undefined) => void;
  formatter?: RegExp;
  onChange?: (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => void;
  fieldState: any;
}

const DatePicker = ({
  inputName,
  inputPlaceholder,
  fieldState,
  icon,
  formatter = /([\d]{4})-([\d]{2})-([\d]{2})/,
  onValueChange,
  ...rest
}: DatePickerProps) => {
  const [date, setDate] = useState<Date>();
  const [show, setShow] = useState(false);
  const onChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date | undefined
  ) => {
    if (event.type === "dismissed") {
      setShow(false);
      return;
    }

    if (event.type === "set") {
      const date = new Date(selectedDate || "");

      setShow(false);

      setDate(date);

      onValueChange(date?.toISOString());
    }
  };

  let [, year, month, day] = formatter.exec(date?.toISOString() || "")!;

  return (
    <View>
      <>
        <TouchableOpacity onPress={() => setShow(true)}>
          <View pointerEvents="none">
            <Input
              placeholder={inputPlaceholder || "DD/MM/YYY"}
              inputName={inputName}
              fieldState={fieldState}
              icon={icon || iconCreator(FontAwesome5, "calendar", 32)}
              value={`${day}/${month}/${year}`}
            />
          </View>
        </TouchableOpacity>
      </>
      {show && (
        <DateTimePicker
          value={date || new Date()}
          onChange={onChange}
          {...rest}
        />
      )}
    </View>
  );
};

export default DatePicker;
