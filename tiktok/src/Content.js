import { useState, useEffect } from 'react'

function Content() {
    const [title, setTitle] = useState('');

    useEffect(() => {
        console.log('Mounted')
    })

    return (
        <div>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
        </div>
    )
}

export default Content;