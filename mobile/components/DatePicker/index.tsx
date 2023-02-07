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

  //BUG the timezone is UTC, so it's getting 3h ahead NEED to fix that
  const formatedDate = /([0-9]{4})-([\d]{2})-([\d]{2})/.exec(
    date?.toISOString() || ""
  );

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
              value={
                (formatedDate?.length &&
                  `${formatedDate[3]}/${formatedDate[2]}/${formatedDate[1]}`) ||
                ""
              }
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
