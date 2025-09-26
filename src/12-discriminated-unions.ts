type Square = {
    type: 'square';
    width: number;
    height: number;
}

type Circle  = {
    type: 'circle';
    radius: number;
}

type Shape = Square | Circle;

const getArea = (shape: Shape): number => {
    switch (shape.type) {
        case 'circle':
            return Math.PI * shape.radius ** 2
        case 'square':
            return shape.height * shape.width;
    }
}