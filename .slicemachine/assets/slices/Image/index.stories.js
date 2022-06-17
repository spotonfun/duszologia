import MyComponent from '../../../../slices/Image';

export default {
  title: 'slices/Image'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=900&h=500&fit=crop"},"caption":[{"type":"heading1","text":"Integrate sticky web services","spans":[]}]},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _Wide = () => <MyComponent slice={{"variation":"wide","name":"wide","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&h=500&fit=crop"},"caption":[{"type":"heading1","text":"Visualize proactive architectures","spans":[]}]},"id":"_Wide"}} />
_Wide.storyName = 'wide'
