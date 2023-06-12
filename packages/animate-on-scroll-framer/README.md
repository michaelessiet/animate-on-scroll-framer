<h1 align="center">Animate On Scroll Framer</h1>
<h3 align="center">An open source scroll reveal animation package made for React Web</h3>

<br/>

Animate On Scroll Framer is an open source scroll reveal animation package made for React Web using tools such as framer motion. 

It's easy to install and get started with:

## Installation
```bash
npm install animate-on-scroll-framer 
```
and that's it it's installed in your React node_modules. No need for other packages or css libraries.

## Usage
Using the package in your project is as straight forward as can be.
```javascript
import {AnimateOnScroll} from 'animate-on-scroll-framer' //that's all you need to import 

export function Component(){
  return (
    <AnimateOnScroll animation="flipIn">
      <h1>I appear with a cool animation called flipIn</h1>
    </AnimateOnScroll>
  )
}
```
by default the flipIn animation has a duration of 1 second while the other animations have a default duration of 0.4 seconds. The default delay for all animations is 0.5 seconds. 

Both of those and more can be changed by adding them to AnimateOnScroll as props:
```javascript
<AnimateOnScroll duration={4} delay={3} aniamtion="flipIn">
  <h1>I have a longer duration and delay than my friend up top</h1>
</AnimateOnScroll>
```

## Props
- **animation** : This prop is compulsory it is used to select the animation to be used
- **duration**: This is an optional prop that allows you to modify the duration of the animation. Values numbers and represent seconds
- **delay**: This is an optional prop that allows you to modify the delay of the animation. Values are numbers and represent seconds
- **animateEachChild**: For now this prop only applies to the flipIn animation. It is an optional prop which has a boolean value
- **spring**: This is another optional prop, it's used to switch on or off the spring effect in animations. It is switched on by default

#### License
Animate On Scroll Framer is under the MIT License.