import '../styles/index.css'

function Home () {
    return (
        <section id="Home">
            <div class="console">
                <div class="console-header">    
                    <div class="plus-icon">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </div>
                    <div class="text-space">
                        <p>
                            taiel@fedora:~
                        </p>
                    </div>
                    <div class="right-section-console-header">
                        <div class="search-icon">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </div>
                        <div class="list-icon">
                            <i class="fa fa-bars" aria-hidden="true"></i>
                        </div>
                        <div class="exit-icon">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </div>
                    </div>  
                </div>
                <div class="console-body">
                    <p>
                        <span>taiel@fedora</span>:<span>~</span>$ <span class="written">git init portfolio-molina-taiel</span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Home;