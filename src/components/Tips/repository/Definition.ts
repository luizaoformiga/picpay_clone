type Color = {
    bgColor: any;
}

export default interface Definition extends Color {
    bgColor: Promise<Color> | any;
} 