<div className='navbar navbar-fixed-top navbar-inverse' role='navigation'>
  <div className='container'>
    <div className='navbar-header'>
      <button
        type='button'
        className='navbar-toggle'
        data-toggle='collapse'
        data-target='#nav-items'>
        <span className='sr-only'>Toggle navigation</span>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
      </button>
      <a className='navbar-brand' href='/'>
        wikistack
      </a>
    </div>
    <div id='nav-items' className='collapse navbar-collapse'>
      <ul className='nav navbar-nav'>
        <li>
          <a href='/wiki/'>index</a>
        </li>
        <li>
          <a href='/wiki/add'>write</a>
        </li>
        <li>
          <a href='/users'>users</a>
        </li>
        <li>
          <a href='/search'>tagsearch</a>
        </li>
        <li>
          <a href='/about'>about</a>
        </li>
      </ul>
    </div>
  </div>
</div>;
