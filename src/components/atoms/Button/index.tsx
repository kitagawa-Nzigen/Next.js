import styled from 'styled-components'
import { Responsive } from 'types'
import {
    toPropValue,
    Color,
    FontSize,
    LetterSpacing,
    LineHeight,
    Space,
} from 'utils/styles'

// ボタンのバリアント
export type ButtonVariant = 'primary' | 'secondary' | 'danger'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant
    fontSize?: Responsive<FontSize>
    fontWeight?: Responsive<string>
    letterSpacing?: Responsive<LetterSpacing>
    lineHeight?: Responsive<LineHeight>
    textAlign?: Responsive<string>
    color?: Responsive<Color>
    backgroundColor?: Responsive<Color>
    width?: Responsive<string>
    height?: Responsive<string>
    minWidth?: Responsive<string>
    minHeight?: Responsive<string>
    display?: Responsive<string>
    border?: Responsive<string>
    overflow?: Responsive<string>
    margin?: Responsive<Space>
    marginTop?: Responsive<Space>
    marginRight?: Responsive<Space>
    marginBottom?: Responsive<Space>
    marginLeft?: Responsive<Space>
    padding?: Responsive<Space>
    paddingTop?: Responsive<Space>
    paddingRight?: Responsive<Space>
    paddingBottom?: Responsive<Space>
    paddingLeft?: Responsive<Space>
    pseudoClass?: {
        hover?: {
            backgroundColor?: Responsive<Color>
        }
        disabled?: {
            backgroundColor?: Responsive<Color>
        }
    }
}

const variants = {
    // プライマリ
    primary: {
        color: 'white',
        backgroundColor: 'primary',
        border: 'none',
        pseudoClass: {
            hover: {
                backgroundColor: 'primaryDark',
            },
            disabled: {
                backgroundColor: 'primary',
            },
        },
    },
    // セカンダリ
    secondary: {
        color: 'white',
        backgroundColor: 'secondary',
        border: 'none',
        pseudoClass: {
            hover: {
                backgroundColor: 'secondaryDark',
            },
            disabled: {
                backgroundColor: 'secondary',
            },
        },
    },
    // デンジャー
    danger: {
        color: 'white',
        backgroundColor: 'danger',
        border: 'none',
        pseudoClass: {
            hover: {
                backgroundColor: 'dangerDark',
            },
            disabled: {
                backgroundColor: 'danger',
            },
        },
    },
}

/**
 * ボタン
 * バリアント、色、タイポグラフィ、レイアウト、スペース関連のPropsを追加
 */
const Button = styled.button<ButtonProps>`
  ${({ variant, color, backgroundColor, pseudoClass, theme }) => {
    // バリアントのスタイルの適用
    if (variant && variants[variant]) {
        const styles = []
        !color &&
        styles.push(toPropValue('color', variants[variant].color, theme))
        !backgroundColor &&
        styles.push(
            toPropValue(
                'background-color',
                variants[variant].backgroundColor,
                theme,
            ),
        )
        !pseudoClass &&
        styles.push(
            `&:hover {
            ${toPropValue(
                'background-color',
                variants[variant].pseudoClass.hover.backgroundColor,
                theme,
            )}
          }`.replaceAll('\n', ''),
        )
        !pseudoClass &&
        styles.push(
            `&:disabled {
            ${toPropValue(
                'background-color',
                variants[variant].pseudoClass.disabled.backgroundColor,
                theme,
            )}
          }`.replaceAll('\n', ''),
        )
        return styles.join('\n')
    }
}}
  ${(props) => props.fontSize && toPropValue('font-size', props.fontSize, props.theme)}
  ${(props) => props.letterSpacing && toPropValue('letter-spacing', props.letterSpacing, props.theme)}
  ${(props) => props.lineHeight && toPropValue('line-height', props.lineHeight, props.theme)}
  ${(props) => props.color && toPropValue('color', props.color, props.theme)}
  ${(props) => props.backgroundColor && toPropValue('background-color', props.backgroundColor, props.theme)}
  ${(props) => props.width && toPropValue('width', props.width, props.theme)}
  ${(props) => props.height && toPropValue('height', props.height, props.theme)}
  ${(props) => props.minWidth && toPropValue('min-width', props.minWidth, props.theme)}
  ${(props) => props.minHeight && toPropValue('min-height', props.minHeight, props.theme)}
  ${(props) => props.display && toPropValue('display', props.display, props.theme)}
  ${(props) => props.border && toPropValue('border', props.border, props.theme)}
  ${(props) => props.overflow && toPropValue('overflow', props.overflow, props.theme)}
  ${(props) => props.margin && toPropValue('margin', props.margin, props.theme)}
  ${(props) => props.marginTop && toPropValue('margin-top', props.marginTop, props.theme)}
  ${(props) => props.marginRight && toPropValue('margin-right', props.marginRight, props.theme)}
  ${(props) => props.marginBottom && toPropValue('margin-bottom', props.marginBottom, props.theme)}
  ${(props) => props.marginLeft && toPropValue('margin-left', props.marginLeft, props.theme)}
  ${(props) => props.padding && toPropValue('padding', props.padding, props.theme)}
  ${(props) => props.paddingTop && toPropValue('padding-top', props.paddingTop, props.theme)}
  ${(props) => props.paddingRight && toPropValue('padding-right', props.paddingRight, props.theme)}
  ${(props) => props.paddingBottom && toPropValue('padding-bottom', props.paddingBottom, props.theme)}
  ${(props) => props.paddingLeft && toPropValue('padding-left', props.paddingLeft, props.theme)}
  &:hover {
    ${(props) =>
    toPropValue(
        'background-color',
        props?.pseudoClass?.hover?.backgroundColor,
    )}
  }
  &:disabled {
    ${(props) =>
    toPropValue(
        'background-color',
        props?.pseudoClass?.disabled?.backgroundColor,
    )}
  }
  cursor: pointer;
  outline: 0;
  text-decoration: 'none';
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  border-radius: 4px;
  border: none;
`

Button.defaultProps = {
    variant: 'primary',
    color: 'white',
    display: 'inline-block',
    // textAlign、lineHeight、padding*などを削除
    fontSize: 'inherit',
}

export default Button