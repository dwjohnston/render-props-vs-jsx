# Problem Example 

Start the dev sever and click the SimpleModal4 button - note the annoying behaviour of the textbox as you type in it, due to constant remounting.  


# Discussion

I had always assumed that: 


```
const MyComponent = (props) => {
   const {renderSomething} = props; 
  return <div> 
     {renderSomething("foo")} 
  </div>
}

```

and 

```
const MyComponent = (props) => {
   const {Something} = props; 
  return <div> 
     <Something foo="foo"/> 
  </div>
}
```


were functionally exactly the same but they're not. It appears that `renderSomething` is treated as the same component, ie. mounts once, whereas `Something` gets treated as a new component each time, and will remount on each render. 

I'm a bit perplexed by this - reading the [React render props documentation](https://reactjs.org/docs/render-props.html#using-props-other-than-render) doesn't mention anything about a naming convention, and infact seems to suggest that any property name is fine. 

Probably the issue is on the JSX syntax vs curly-bracket function call syntax. 