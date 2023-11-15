import HomeIcon from '@mui/icons-material/Home';

type HomeIconProps = {
    fontSize?: string;
    color?: string;
};

const HomeIconComponent = ({ fontSize = 'inherit', color = 'inherit' }: HomeIconProps): JSX.Element => {
    return (
        <span>
            <HomeIcon fontSize={fontSize} color={color} />
        </span>
    );
};

export function HomeIcons() {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <HomeIconComponent />
        </div>
    );
}

export default HomeIcons