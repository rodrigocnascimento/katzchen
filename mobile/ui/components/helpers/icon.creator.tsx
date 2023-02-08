import { ViewStyle } from "react-native";

export type IconPosition = "left" | "right";

export interface IInputIcon {
  provider: any;
  name: string;
  size: number;
  position?: IconPosition;
  color?: string;
  getIcon?: any;
}

export const iconCreator = (
  provider: unknown,
  name: string,
  size: number = 24,
  color: string = "#000",
  position: IInputIcon["position"] = "left"
): IInputIcon => ({
  provider,
  name,
  size,
  color,
  position,
  getIcon(style: ViewStyle) {
    return (
      <this.provider
        style={style}
        name={this.name}
        size={this.size}
        color={this.color}
      />
    );
  },
});
