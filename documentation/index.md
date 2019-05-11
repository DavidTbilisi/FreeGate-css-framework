<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" href="../css/freegate.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="css/prism.css">
    <title>Document</title>
    <style>
        code span, code {font-size: 1.4rem;}
        html, body {width: 100%; height: 100%;}
        .mobile-menu i {color: #000}
        .sects {margin-bottom: 25px;}
    </style>
</head>
<body>


<div class="container padding background-white">

    <div class="sects">
        <div class="border padding mb-2">
            <p class="h5 mb-2">Paddings and marigins</p>
            <p>padding and margin units are <strong><i>rem</i></strong>'s and limit is 25 </p>
<pre class="line-numbers language-markup">
<code>
<!-- PADDING -->
<!-- padding all around -->
<div class="col p-2"></div>

<!-- padding top -->
<div class="col pt-2"></div>

<!-- padding bottom -->
<div class="col pb-2"></div>

<!-- padding right -->
<div class="col pr-2"></div>

<!-- padding left -->
<div class="col pl-2"></div>



<!-- MARGIN -->
<!-- padding all around -->
<div class="col m-2"></div>

<!-- padding top -->
<div class="col mt-2"></div>

<!-- padding bottom -->
<div class="col mb-2"></div>

<!-- padding right -->
<div class="col mr-2"></div>

<!-- padding left -->
<div class="col ml-2"></div>

</code>
</pre>
        </div>
    </div>


<div class="sects">
    
    <div class="border padding mb-2">
        <p class="h5 mb-2">Rows & row based grids</p>

        <div class="mb-2">
            <p>In order to create Equal-width Grid system you can use class <span class="bold">col</span> inside the <span class="bold">row</span> countainer.</p>
            <p>Use can use as many <span class="bold">col</span> classed divs as you need.</p>
        </div>

        <div class="row mb-2">
            <div class="col p-2 border background-aquamarine">
                <p class="text-center">col</p>
                <p>perspiciatis at, eos asperiores repellendus ut!</p>
            </div>

            <div class="col p-2 border background-aquamarine">
                <p class="text-center">col</p>
                <p>perspiciatis at, eos asperiores repellendus ut!</p>
            </div>

            <div class="col p-2 border background-aquamarine">
                <p class="text-center">col</p>
                <p>perspiciatis at, eos asperiores repellendus ut!</p>
            </div>
        </div>

<pre class="line-numbers language-markup">
<code>
<div class="row">
    <div class="col p-2 border background-aquamarine">
        <p class="text-center">col</p>
        <p>perspiciatis at, eos asperiores repellendus ut!</p>
    </div>

    <div class="col p-2 border background-aquamarine">
        <p class="text-center">col</p>
        <p>perspiciatis at, eos asperiores repellendus ut!</p>
    </div>

    <div class="col p-2 border background-aquamarine">
        <p class="text-center">col</p>
        <p>perspiciatis at, eos asperiores repellendus ut!</p>
    </div>
</div>

</code>
</pre>

    <div class="mb-2">
        <p>In order to create multiple line grid with with <span class="bold">row</span> class you need to provide as many row container as meny line you want to have.</p>
    </div>

    <div class="row">
        <div class="col p-2 border background-aquamarine">
            <p class="text-center">col</p>
            <p>perspiciatis at, eos asperiores repellendus ut!</p>
        </div>
    
        <div class="col p-2 border background-aquamarine">
            <p class="text-center">col</p>
            <p>perspiciatis at, eos asperiores repellendus ut!</p>
        </div>
    
        <div class="col p-2 border background-aquamarine">
            <p class="text-center">col</p>
            <p>perspiciatis at, eos asperiores repellendus ut!</p>
        </div>
    </div>

    <div class="row mb-2">
        <div class="col p-2 border background-aquamarine">
            <p class="text-center">col</p>
            <p>perspiciatis at, eos asperiores repellendus ut!</p>
        </div>
    
        <div class="col p-2 border background-aquamarine">
            <p class="text-center">col</p>
            <p>perspiciatis at, eos asperiores repellendus ut!</p>
        </div>
    
        <div class="col p-2 border background-aquamarine">
            <p class="text-center">col</p>
            <p>perspiciatis at, eos asperiores repellendus ut!</p>
        </div>
    </div>


<pre class="line-numbers language-markup">
<code>
<div class="row">
    <div class="col p-2 border background-aquamarine">
        <p class="text-center">col</p>
        <p>perspiciatis at, eos asperiores repellendus ut!</p>
    </div>

    <div class="col p-2 border background-aquamarine">
        <p class="text-center">col</p>
        <p>perspiciatis at, eos asperiores repellendus ut!</p>
    </div>

    <div class="col p-2 border background-aquamarine">
        <p class="text-center">col</p>
        <p>perspiciatis at, eos asperiores repellendus ut!</p>
    </div>
</div>

<div class="row">
    <div class="col p-2 border background-aquamarine">
        <p class="text-center">col</p>
        <p>perspiciatis at, eos asperiores repellendus ut!</p>
    </div>

    <div class="col p-2 border background-aquamarine">
        <p class="text-center">col</p>
        <p>perspiciatis at, eos asperiores repellendus ut!</p>
    </div>

    <div class="col p-2 border background-aquamarine">
        <p class="text-center">col</p>
        <p>perspiciatis at, eos asperiores repellendus ut!</p>
    </div>
</div>
</code>
</pre>

    <div class="mb-2">
        <p class="mb-2 h5">Column width's</p>
        <p>In order to provide column width is necessary to provide 12 based classes ( col-10, col-4, col-8 etc... )</p>
    </div>

    <div class="row">
        <div class="col-8 p-2 border background-aquamarine">
            <p>col-8</p>
        </div>

        <div class="col-4 p-2 border background-aquamarine">
            <p>col-4</p>
        </div>
    </div>
    
    <div class="row">
        <div class="col-4 p-2 border background-aquamarine">
            <p>col-4</p>
        </div>

        <div class="col-2 p-2 border background-aquamarine">
            <p>col-2</p>
        </div>

        <div class="col-6 p-2 border background-aquamarine">
            <p>col-6</p>
        </div>
    </div>

    <div class="row mb-2">
        <div class="col-6 p-2 border background-aquamarine">
            <p>col-6</p>
        </div>

        <div class="col-3 p-2 border background-aquamarine">
            <p>col-3</p>
        </div>

        <div class="col-3 p-2 border background-aquamarine">
            <p>col-3</p>
        </div>
    </div>

<pre class="line-numbers language-markup">
<code>
<div class="row">
    <div class="col-8 p-2 border background-aquamarine">
        <p>col-8</p>
    </div>

    <div class="col-4 p-2 border background-aquamarine">
        <p>col-4</p>
    </div>
</div>

<div class="row">
    <div class="col-4 p-2 border background-aquamarine">
        <p>col-4</p>
    </div>

    <div class="col-2 p-2 border background-aquamarine">
        <p>col-2</p>
    </div>

    <div class="col-6 p-2 border background-aquamarine">
        <p>col-6</p>
    </div>
</div>

<div class="row">
    <div class="col-6 p-2 border background-aquamarine">
        <p>col-6</p>
    </div>

    <div class="col-3 p-2 border background-aquamarine">
        <p>col-3</p>
    </div>

    <div class="col-3 p-2 border background-aquamarine">
        <p>col-3</p>
    </div>
</div>

</code>
</pre>

    <div class="mb-2">
        <p class="mb-2 h5 text-center">Center medium size div</p>
    </div>

    <div class="row">
        <div class="col-6 p-2 m-auto border background-aquamarine">
            <p>col-6 with margin auto (m-auto)</p>
        </div>
    </div>

</div>

<div class="padding border">
    <p class="h5 mb-2">Flex grids</p>

    <div class="mb-2">
        <p>To provide multiple line grid with the Equal-width columns, it is convinient to use technic described in the example below.</p>
        <p>Insted of <span class="bold">row</span> class we use <span class="bold">flex-grid-number</span> class for the parent container.</p>
        <p>It uses css <span class="bold">flex box</span> for parent container.</p>
        <p>In this example number for <span class="bold">flex-grid-<span class="italic">number</span> </span> is 4. In order to determine the number of the grid colsumns you want to use in your project, you going to divide some number to 12. For instance, if you want to use three column grid, the number of the flex-grid class is going to be 4 becouse 12 divided by 4 is going to be 3 and this is the columns number.</p>
        <p>For the child containers there are no classes necessary. You can add background-color, border, padding classes relevant to your needs.</p>
    </div>

    <div class="flex-grid-4">
        <div class="p-2 border background-aquamarine">
            <p>perspiciatis at, eos asperiores repellendus ut!</p>
        </div>
    
        <div class="p-2 border background-aquamarine">
            <p>perspiciatis at, eos asperiores repellendus ut!</p>
        </div>

        <div class="p-2 border background-aquamarine">
            <p>perspiciatis at, eos asperiores repellendus ut!</p>
        </div>

        <div class="p-2 border background-aquamarine">
            <p>perspiciatis at, eos asperiores repellendus ut!</p>
        </div>

        <div class="p-2 border background-aquamarine">
            <p>perspiciatis at, eos asperiores repellendus ut!</p>
        </div>

        <div class="p-2 border background-aquamarine">
            <p>perspiciatis at, eos asperiores repellendus ut!</p>
        </div>
    
    </div>



<pre class="line-numbers language-markup">
<code>
<div class="flex-grid-4">
    <div class="p-2 border background-aquamarine">
        <p>perspiciatis at, eos asperiores repellendus ut!</p>
    </div>

    <div class="p-2 border background-aquamarine">
        <p>perspiciatis at, eos asperiores repellendus ut!</p>
    </div>

    <div class="p-2 border background-aquamarine">
        <p>perspiciatis at, eos asperiores repellendus ut!</p>
    </div>

    <div class="p-2 border background-aquamarine">
        <p>perspiciatis at, eos asperiores repellendus ut!</p>
    </div>

    <div class="p-2 border background-aquamarine">
        <p>perspiciatis at, eos asperiores repellendus ut!</p>
    </div>

    <div class="p-2 border background-aquamarine">
        <p>perspiciatis at, eos asperiores repellendus ut!</p>
    </div>
</div>

</code>
</pre>

    </div>
</div>




<div class="sects">
    <div class="border padding">
        <p class="h5 mb-2">Messages</p>

        <div class="info close">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed fuga sapiente mollitia magni, unde facilis. 
                Doloribus laudantium illo eaque sed ut numquam adipisci aspernatur assumenda cumque. 
                Nostrum vitae facere modi!</p>
        </div>
    
        <div class="warning close">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed fuga sapiente mollitia magni, unde facilis. 
                Doloribus laudantium illo eaque sed ut numquam adipisci aspernatur assumenda cumque. 
                Nostrum vitae facere modi!</p>
        </div>
    
        <div class="success close">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed fuga sapiente mollitia magni, unde facilis. 
                Doloribus laudantium illo eaque sed ut numquam adipisci aspernatur assumenda cumque. 
                Nostrum vitae facere modi!</p>
        </div>
    
<pre class="line-numbers language-markup">
<code>
<div class="iinfo close">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed fuga sapiente mollitia magni, unde facilis. 
        Doloribus laudantium illo eaque sed ut numquam adipisci aspernatur assumenda cumque. 
        Nostrum vitae facere modi!</p>
</div>

<div class="wwarning close">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed fuga sapiente mollitia magni, unde facilis. 
        Doloribus laudantium illo eaque sed ut numquam adipisci aspernatur assumenda cumque. 
        Nostrum vitae facere modi!</p>
</div>

<div class="ssuccess close">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed fuga sapiente mollitia magni, unde facilis. 
        Doloribus laudantium illo eaque sed ut numquam adipisci aspernatur assumenda cumque. 
        Nostrum vitae facere modi!</p>
</div>

</code>
</pre>
    </div>
</div>

<div class="lists sects">
    <div class="border padding">
        <p class="h5 mb-2">Lists with styles</p>

        <div>
            <ul class="table mb-2">
                <li>Table styled UL</li>
                <li>Table styled UL</li>
                <li>Table styled UL</li>
                <li>Table styled UL</li>
                <li>Table styled UL</li>
                <li>Table styled UL</li>
            </ul>
    
            <ul class="check mb-2">
                <li>List with checks</li>
                <li>List with checks</li>
                <li>List with checks</li>
                <li>List with checks</li>
                <li>List with checks</li>
                <li>List with checks</li>
            </ul>
    
            <p><span class="bold">list-style-none</span> or <span class="bold">ls-none</span> For reseting list style</p>
    
<pre class="line-numbers language-markup">
<code>
<!-- ul with table style -->
<ul class="table">
    <li>Table styled UL</li>
    <li>Table styled UL</li>
    <li>Table styled UL</li>
    <li>Table styled UL</li>
    <li>Table styled UL</li>
    <li>Table styled UL</li>
</ul>

<!-- ul with checks -->
<ul class="check">
    <li>List with checks</li>
    <li>List with checks</li>
    <li>List with checks</li>
    <li>List with checks</li>
    <li>List with checks</li>
    <li>List with checks</li>
</ul>

</code>
</pre>
        </div>
    </div>
</div>

<div class="tables sects">
    <div class="border padding">
        <p class="h5 mb-2">Table</p>
        <div class="mb-2">
            <p>Tables are responsive by defaul. If tables are on the extra small screen sizes you can use <span class="bold">overflow-x-scroll</span> of <span class="bold">owerflow-y-scroll</span> class for make it scrollabe on the x axis. You also can use classes for overflowing elements such as:</p>
            <ul class="table check">
                <li>owerflow-y-scroll</li>
                <li>owerflow-y-auto</li>
                <li>owerflow-y-hudden</li>
                <li>owerflow-y-inherit</li>
                <li>owerflow-y-unset</li>
            </ul>
            <p>The same classes comes with X axis and without axis sign.</p>
    
            <ul class="table check">
                <li>owerflow-scroll</li>
                <li>owerflow-auto</li>
                <li>owerflow-hudden</li>
                <li>owerflow-inherit</li>
                <li>owerflow-unset</li>
            </ul>
        </div>
        <table>
            <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
            </tr>
            <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
            </tr>
            <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>UK</td>
            </tr>
            <tr>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
            </tr>
            <tr>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
            </tr>
        </table>
    </div>
</div>

<div class="text sects">
    <div class="border padding">
        <p class="h5 mb-2">Text styles</p>

        <div class="text-styles mb-2">
            <p class="uppercase">Uppercase text</p>
            <p class="lowercase">Lowercase text</p>
            <p class="first-upper">first character uppercase</p>
            <p class="first-lower">FIRST CHARACTER LOWERCASE</p>
            <p class="bold">bold text</p>
            <p class="italic">italic text</p>
        
        <div class="mb-2">
        <pre class="line-numbers language-markup">
        <code>
        <p class="uppercase">Uppercase text</p>
        <p class="lowercase">Lowercase text</p>
        <p class="first-upper">first character uppercase</p>
        <p class="first-lower">FIRST CHARACTER LOWERCASE</p>
        <p class="bold">bold text</p>
        <p class="italic">italic text</p>
        
        </code>
        </pre>
        </div>
        
            <div class="ws-nowrap border mb-2" style="width: 120px;">
                <p>Text with no wrap. Class = <span class="bold">ws-nowrap</span></p>
            </div>
        
            <div class="draw background-f2f2f2">
                <p class="pl-3 pt-2">For text wrapping you can use:</p>
                <ul class="table check">
                    <li>ws-nowrap: white-space: nowrap</li>
                    <li>ws-normal: white-space: normal</li>
                    <li>ws-initial: white-space: initial</li>
                    <li>ws-pre-wrap: white-space: pre-wrap</li>
                    <li>ws-pre-line: white-space: pre-line</li>
                </ul>
            </div>
    </div>
    


<p class="h5 mb-2">Text sizes</p>

<div class="mb-2">
    <p class="text-lg">Large text</p>
    <p class="text-md">Normal text</p>
    <p class="text-sm">Small text</p>
    <p class="text-xs">Small text</p>
</div>
<pre class="line-numbers language-markup">
<code>
<p class="text-lg">Large text</p>
<p class="text-md">Normal text</p>
<p class="text-sm">Small text</p>
<p class="text-xs">Small text</p>

</code>
</pre>

<p class="h5 mb-2">Headings and heading classes</p>

<div class="mb-2">
    <p class="h1">Paragraph with h1 class</p>
    <p class="h2">Paragraph with h2 class</p>
    <p class="h3">Paragraph with h3 class</p>
    <p class="h4">Paragraph with h4 class</p>
    <p class="h5">Paragraph with h5 class</p>
    <p class="h6">Paragraph with h6 class</p>

    <h1>h1 heading</h1>
    <h2>h2 heading</h2>
    <h3>h3 heading</h3>
    <h4>h4 heading</h4>
    <h5>h5 heading</h5>
    <h6>h6 heading</h6>
</div>

<pre class="line-numbers language-markup">
<code>
<p class="h1">Paragraph with h1 class</p>
<p class="h2">Paragraph with h2 class</p>
<p class="h3">Paragraph with h3 class</p>
<p class="h4">Paragraph with h4 class</p>
<p class="h5">Paragraph with h5 class</p>
<p class="h6">Paragraph with h6 class</p>

</code>
</pre>

</div>
</div>
    
<div class="buttons mb-4">
    <div class="border padding">
        <p class="h5 mb-2">Buttons</p>

        <div class="mb-2">
            <button class="btn">btn class</button>
            <button class="btn primary">btn primary classes</button>
            <button class="btn secondary">btn secondary classes</button>
        </div>
    
        <div class="mb-2">
            <button class="btn btn-large">Large button</button>
            <button class="btn">Standard button</button>
            <button class="btn btn-normal">Normal button</button>
            <button class="btn btn-small">Small button</button>
        </div>
    
<pre class="line-numbers language-markup">
<code>
<button class="btn btn-large">Large button</button>
<button class="btn">Standard button</button>
<button class="btn btn-normal">Normal button</button>
<button class="btn btn-small">Small button</button>

</code>
</pre>
    </div>
</div>


<div class="sects">
    
    <div class="border padding">
        <P class="h5 mb-2">Tabs component</P>
        <div>
            <!-- TABS -->
            <div class="tabs">
                <div class="row">
                    <div class="p-2 pr-2 pl-3 active">Tab one</div>
                    <div class="p-2 pr-2 pl-3">Tab two</div>
                    <div class="p-2 pr-2 pl-3">Tab three</div>
                </div>
                
                <div class="row p-3">
                    <div class="active">
                        <p class="h5">Content for tab ONE</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni est ad corrupti? 
                            Consequatur dignissimos cum, accusamus beatae repellat ducimus at! Dolorem in animi 
                            earum alias sint nostrum eum perferendis laudantium!</p>
                    </div>
        
                    <div>
                        <p class="h5">Content for tab TWO</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni est ad corrupti? 
                            Consequatur dignissimos cum, accusamus beatae repellat ducimus at! Dolorem in animi 
                            earum alias sint nostrum eum perferendis laudantium!</p>
                    </div>
        
                    <div>
                        <p class="h5">Content for tab THREE</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni est ad corrupti? 
                            Consequatur dignissimos cum, accusamus beatae repellat ducimus at! Dolorem in animi 
                            earum alias sint nostrum eum perferendis laudantium!</p>
                    </div>
                </div>
            </div>
        </div>
    
    
<pre class="line-numbers language-markup">
<code>
<!-- TABS -->
<div class="tabs">
    <div class="row">
        <div class="p-2 pr-2 pl-3 active">Tab one</div>
        <div class="p-2 pr-2 pl-3">Tab two</div>
        <div class="p-2 pr-2 pl-3">Tab three</div>
    </div>
    
    <div class="row p-3">
        <div class="active">
            <p class="h5">Content for tab ONE</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni est ad corrupti? 
                Consequatur dignissimos cum, accusamus beatae repellat ducimus at! Dolorem in animi 
                earum alias sint nostrum eum perferendis laudantium!</p>
        </div>

        <div>
            <p class="h5">Content for tab TWO</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni est ad corrupti? 
                Consequatur dignissimos cum, accusamus beatae repellat ducimus at! Dolorem in animi 
                earum alias sint nostrum eum perferendis laudantium!</p>
        </div>

        <div>
            <p class="h5">Content for tab THREE</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni est ad corrupti? 
                Consequatur dignissimos cum, accusamus beatae repellat ducimus at! Dolorem in animi 
                earum alias sint nostrum eum perferendis laudantium!</p>
        </div>
    </div>
</div>

</code>
</pre>
    </div>

</div>


<div class="sects">

    <div class="border padding">
        <p class="h5">Slider</p>
        <p class="mb-2">To start the slider you got to provide slider selector: new <span class="bold color-green">FgSlider('#slider-1', {})</span></p>
        
        <div class="relative p-20 mb-2">
            <div class="fg-slider" id="slider-1">
                <div class="slider-content">
                    <p class="h3 color-white">This is slider content</p>
                </div>
                <img src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/09/25/15/sonyworld18judges2609i.jpg" alt="">
        
                <div class="slider-content">
                    <p class="h3 color-white">This is slider content</p>
                </div>
                <img src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/09/25/15/sonyworld18judges2609f.jpg" alt="">
        
                <div class="slider-content">
                    <p class="h3 color-white">This is slider content</p>
                </div>
                <img src="http://finedininglovers.cdn.crosscast-system.com/ImageAlbum/22402/original_01-Zeyar-Htun-Sony-Photography-Award-2018.jpg" alt="">
        
                <div class="slider-content">
                    <p class="h3 color-white">This is slider content</p>
                </div>
                <img src="http://finedininglovers.cdn.crosscast-system.com/ImageAlbum/22408/original_07-Nuket-Uluc-Sony-Photography-Award-2018.jpg" alt="">
            </div>
        </div>
        
<pre class="line-numbers language-markup">
<code>
    <div class="relative p-20">
        <div class="fg-slider" id="slider-1">
            <div class="slider-content">
                <p>This is slider content</p>
            </div>
            <img src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/09/25/15/sonyworld18judges2609i.jpg" alt="">
    
            <div class="slider-content">
                <p>This is slider content</p>
            </div>
            <img src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/09/25/15/sonyworld18judges2609f.jpg" alt="">
    
            <div class="slider-content">
                <p>This is slider content</p>
            </div>
            <img src="http://finedininglovers.cdn.crosscast-system.com/ImageAlbum/22402/original_01-Zeyar-Htun-Sony-Photography-Award-2018.jpg" alt="">
    
            <div class="slider-content">
                <p>This is slider content</p>
            </div>
            <img src="http://finedininglovers.cdn.crosscast-system.com/ImageAlbum/22408/original_07-Nuket-Uluc-Sony-Photography-Award-2018.jpg" alt="">
        </div>
    </div>

</code>
</pre>

<p class="mb-2">Slider invocation</p>
<pre class="line-numbers language-javascript">
<code>
    new FgSlider('#slider-1', {
        autoplay: true, // autoplay on / off
        effect: 'slide', // fade, scale, slide, slide-top
        duration: 5000, // duration till the next slide
        bullets: true, // show / hide bullets
    });

</code>
</pre>
    </div>

</div>

<div class="sects">

    <div class="border padding">
        <p class="h4 mb-2">Modal box / modal popup</p>

        <!-- Modal invocation button-->
        <button data-toggle="modal" data-target="modal" class="btn mb-2">Open modal</button>
        
<pre class="line-numbers language-markup">
<code>
    <!-- Modal invocation button-->
    <button data-toggle="modal" data-target="modal" class="btn">Open modal</button>

    <!-- Modal box container -->
    <!-- Put the modal container before body ends -->
    <div class="modal" id="modal">
        <div class="modal-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptas molestias saepe nemo error ullam. Suscipit accusamus atque 
                consectetur facilis deserunt velit ipsa, aliquid minima mollitia fuga! 
                Rerum voluptatem dolore quia!</p>
        </div>
    </div>

</code>
</pre>
    </div>

</div>


<div class="sects">
    <div class="border padding">
        <p class="h5 mb-2">Parallax background image</p>

        <div class="parallax p-10 mb-2">
            <p class="h3 color-white text-center">PARALLAX TEXT</p>
            <img src="https://images3.alphacoders.com/823/thumb-1920-82317.jpg" alt="">
        </div>

<pre class="line-numbers language-markup">
<code>
<div class="-parallax p-10">
    <p class="h3 color-white text-center">PARALLAX TEXT</p>
    <img src="https://images3.alphacoders.com/823/thumb-1920-82317.jpg" alt="">
</div>

</code>
</pre>
    </div>
</div>


<div class="sects">
    <div class="border padding">
        <p class="h5 mb-2">Collapse elements</p>

        <div class="mb-2">
            <button class="collapse-btn btn primary" data-toggle="collapse" collapse-id="collapse-1">
                First collapse
            </button>
        
            <button class="collapse-btn btn primary" data-toggle="collapse" collapse-id="collapse-2">
                Second collapse
            </button>
        
            <button class="collapse-btn btn primary" data-toggle="collapse" collapse-id="collapse-3">
                Third collapse
            </button>
        </div>
    
    
        <div class="collapse" id="collapse-1">
            <div class="p-2 background-white success">
                <p class="h5">First collapse</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo aperiam tempore ab facilis, fugit ex non accusamus. Ducimus sed vitae, impedit dicta asperiores placeat quaerat hic, fugit consectetur harum quasi.</p>
            </div>
        </div>
        
        <div class="collapse" id="collapse-2">
            <div class="p-2 background-white warning">
                <p class="h5">Second collapse</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat adipisci cum expedita, unde ut eveniet nemo ab tenetur labore exercitationem delectus eum deleniti animi voluptatum quibusdam! Totam veritatis voluptatibus possimus.</p>
            </div>
        </div>
    
        <div class="collapse" id="collapse-3">
            <div class="p-2 background-white info">
                <p class="h5">Second collapse</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat adipisci cum expedita, unde ut eveniet nemo ab tenetur labore exercitationem delectus eum deleniti animi voluptatum quibusdam! Totam veritatis voluptatibus possimus.</p>
            </div>
        </div>
    
<pre class="line-numbers language-markup">
<code>
    <!-- collapse button -->
    <button class="collapse-btn btn primary" data-toggle="collapse" collapse-id="collapse-1">
        First collapse
    </button>

    <!-- collapse container -->
    <div class="collapse" id="collapse-1">
        <div class="p-2 background-white success">
            <p class="h5">First collapse</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo aperiam tempore ab facilis, fugit ex non accusamus. Ducimus sed vitae, impedit dicta asperiores placeat quaerat hic, fugit consectetur harum quasi.</p>
        </div>
    </div>
    
</code>
</pre>
    </div>
</div>



<div class="sects">
    <div class="border padding">
        <p class="h4 mb-2">Navigation menu</p>

        <div class="clear mb-2">
        <div class="get-menu">
            <ul>
                <li><a href="#"><i class="fa fa-home" aria-hidden="true"></i> Menu link</a></li>
                <li><a href="#">Menu link</a></li>
                <li><a href="#"><i class="fa fa-angle-down" aria-hidden="true"></i> Dropdown</a>
                    <ul>
                        <li><a href="#">Menu link</a></li>
                        <li><a href="#">Menu link</a></li>
                        <li><a href="#">Menu link</a>
                            <ul>
                                <li><a href="#">Menu link</a></li>
                                <li><a href="#">Menu link</a></li>
                                <li><a href="#">Menu link</a></li>
                                <li><a href="#">Menu link</a></li>
                                <li><a href="#">Menu link</a></li>
                                <li><a href="#">Menu link</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Menu link</a></li>
                        <li><a href="#">Menu link</a></li>
                        <li><a href="#">Menu link</a></li>
                    </ul>
                </li>
                <li><a href="#">Menu link</a></li>
                <li><a href="#">Menu link</a></li>
                <li><a href="#">Menu link</a></li>
            </ul>
        </div>
        </div>
    
    
        <div class="mobile-menu"> <span>Mobile menu demo</span>
            <ul>
                <li><a href="#">Menu link</a></li>
                <li><a href="#">Menu link</a>
                    <ul>
                        <li><a href="#">Menu link</a></li>
                        <li><a href="#">Menu link</a></li>
                        <li><a href="#">Menu link</a></li>
                        <li><a href="#">Menu link</a></li>
                        <li><a href="#">Menu link</a></li>
                    </ul>
                </li>
                <li><a href="#">Menu link</a></li>
                <li><a href="#">Menu link</a></li>
                <li><a href="#">Menu link</a></li>
            </ul>
    
            <!-- you can also add content to the mobile menu with div.menu-content -->
            <div class="menu-content">
                <p>Mobile content data</p>
            </div>
        </div>
    
    
    
<pre class="line-numbers language-markup">
<code>
<!-- desktop menu -->
<div class="get-menu">
    <ul>
        <li><a href="#"><i class="fa fa-home" aria-hidden="true"></i> Menu link</a></li>
        <li><a href="#">Menu link</a></li>
        <li><a href="#"><i class="fa fa-angle-down" aria-hidden="true"></i> Dropdown</a>
            <ul>
                <li><a href="#">Menu link</a></li>
                <li><a href="#">Menu link</a></li>
                <li><a href="#">Menu link</a>
                    <ul>
                        <li><a href="#">Menu link</a></li>
                        <li><a href="#">Menu link</a></li>
                        <li><a href="#">Menu link</a></li>
                        <li><a href="#">Menu link</a></li>
                        <li><a href="#">Menu link</a></li>
                        <li><a href="#">Menu link</a></li>
                    </ul>
                </li>
                <li><a href="#">Menu link</a></li>
                <li><a href="#">Menu link</a></li>
                <li><a href="#">Menu link</a></li>
            </ul>
        </li>
        <li><a href="#">Menu link</a></li>
        <li><a href="#">Menu link</a></li>
        <li><a href="#">Menu link</a></li>
    </ul>
</div>

<!-- mobile menu -->
<!-- provide mobile menu container with class="mobile-menu"-->
<!-- put ul navigation inside mobile menu container -->
<div class="mmobile-menu">
    <!-- Mobile navigation -->
    <ul>
        <li><a href="#">Menu link</a></li>
        <li><a href="#">Menu link</a></li>
        <li><a href="#">Menu link</a>
            <!-- Create auto clickable dropdowns -->
            <ul>
                <li><a href="#">Menu link</a></li>
                <li><a href="#">Menu link</a></li>
                <li><a href="#">Menu link</a></li>
            </ul>
        </li>
        <li><a href="#">Menu link</a></li>
        <li><a href="#">Menu link</a></li>
    </ul>

    <!-- you can also add content to the mobile menu with div.menu-content -->
    <div class="menu-content">
        <!-- add whatever you want -->
    </div>
</div>

</code>
</pre>
    </div>
</div>




<div class="sects">
    <div class="border padding">
        <p class="mb-2 h5">Pagination</p>

        <ul class="pagination">
            <li><a href="#link">previous</a></li>
            <li><a href="#link">0</a></li>
            <li><a href="#link">1</a></li>
            <li><a href="#link">2</a></li>
            <li><a href="#link">3</a></li>
            <li><a href="#link">next</a></li>
        </ul>
    
    
    
<pre class="line-numbers language-markup">
<code>
<ul class="pagination">
    <li><a href="#link">previous</a></li>
    <li><a href="#link">0</a></li>
    <li><a href="#link">1</a></li>
    <li><a href="#link">2</a></li>
    <li><a href="#link">3</a></li>
    <li><a href="#link">next</a></li>
</ul>

</code>
</pre>
    </div>
</div>



<div class="sects">
    <div class="border padding">
        <p class="mb-2 h5">Select dropdown</p>

        <p>For create component first you need to create standard html select tag and than Wrap it in the container with class - <span class="bold">select</span></p>
        <p>For defaul option provide attribute <span class="bold">defaul="ture"</span></p>
        <p>In order to find active value, get attribute - <span class="bold">document.querySelector('.sel-title').getAttribute('active-value')</span></p>
<pre class="line-numbers language-markup">
<code>
<div class="sselect">
    <select>
        <option default="true" value="one">One</option>
        <option value="two">two</option>
        <option value="three">three</option>
        <option value="four">four</option>
        <option value="four">four</option>
        <option value="five">five</option>
        <option value="six">six</option>
        <option value="seven">seven</option>
    </select>
</div>

</code>
</pre>

    <div class="select">
        <select>
            <option default="true" value="one">One</option>
            <option value="two">two</option>
            <option value="three">three</option>
            <option value="four">four</option>
            <option value="four">four</option>
            <option value="five">five</option>
            <option value="six">six</option>
            <option value="seven">seven</option>
        </select>
    </div>

    </div>
</div>




<div class="sects">
    <div class="border padding">
        <p class="mb-2 h5">Confirm box Javascript</p>
        <p>For invication see code below...</p>
        <p>When pressing enter key, certify box goes to YES ( TRUE )</p>

<pre class="line-numbers language-javascript">
<code>
certify('Custom text goes here', function() {
    console.log('text from custom function');
})

</code>
</pre>

        <button id="open-confirmbox" class="btn primary">Open confirm box</button>
    </div>    
</div>


<div class="sects">
    <div class="border padding">
        <p class="mb-2 h5">Array last item</p>

        <pre class="line-numbers language-javascript">
<code>
// Gives you the last key of array
arrLast(arr);

</code>
</pre>
    </div>

</div>





<div class="sects">
    <div class="border padding">
        <p class="mb-2 h5">fg object tools makes your life easier</p>

        <div class="mb-2">
            <p>First of all this is selector - <span class="bold">fg('.selector')</span></p>
            <p>Selector itself is an object with of tools inside. There is tools list down below</p>
        </div>

        <ul class="check">
            <li>fg('selector').get(function(items) {console.log(items)}) - all items selector</li>
            <li>fg('selector').width() - element width</li>
            <li>fg('selector').height() - element height</li>
            <li>fg('selector').fadeIn() - show element with fade effect</li>
            <li>fg('selector').fadeOut() - hide element with fade effect</li>
            <li>fg('selector').on('event' callback) - adding event listener</li>
            <li>fg('selector').markText('text') - get and mark text</li>
            <li>arr.arrLast() - last item inside array</li>
            <li>fg('selector').hide() - element display none</li>
            <li>fg('selector').show() - element display block</li>
            <li>fg('selector').css({ 'border' : '1px solid orange' }) - adding multiple styles to the element</li>
            <li>fg('selector').html('here comes html tags') - adding HTML to the element</li>
            <li>fg('selector').append('here comes html tags or custom html') - append element or your custom html</li>
            <li>fg('selector').prepend('here comes html tags or custom html') - prepend element or your custom html</li>
            <li>fg('selector').findParent('parent element selector class or id') - find parent element width parent element selector class or id.</li>
            <li>fg('selector').node2string('selector or element') - converting node to string.</li>
            <li>fg('selector').string2node('custom html') - converting html to node.</li>
            <li>fg('selector').waitingFor(function(elem) {console.log(elem)}) - waiting for some element</li>
            <li>fg('selector').toggleClass('selector', 'currentClass', 'replaceCurrentClass') - togglis element class</li>
            <li>fg('selector').fullScreen() - Make element fullScreen</li>
            <li>fg('selector').exitFullscreen() - exit fullScreen</li>
            <li>fg(value).timeConverter() - conver seconds to time 04:22:56</li>
            <li>fg('.selector').toggleHTML('Here comes HTML') - Toggle HTML</li>
            <li>fg('#selector').scroll() - This function will scroll to referenced selector (class / id / attribute)</li>
        </ul>

        <pre class="line-numbers language-javascript">
<code>
fg('selector').get(function(items) {console.log(items)}) // - all items selector
fg('selector').width() // - element width
fg('selector').height() // - element height
fg('selector').fadeIn() // - show element with fade effec
fg('selector').fadeOut() // - hide element with fade effect
fg('selector').on('event' callback) // - adding event listener
fg('selector').markText('text') // - get and mark text
fg(arr).arrLast() // - last item inside array
fg('selector').hide() //- element display none
fg('selector').show() // - element display block
fg('selector').css({ 'border' : '1px solid orange' }) // - adding multiple styles to the element
fg('selector').html('here comes html tags') // - adding HTML to the element
fg('selector').append('here comes html tags or custom html') // - append element or your custom html
fg('selector').prepend('here comes html tags or custom html') // - prepend element or your custom html
fg('selector').findParent('parent element selector class or id') // - find parent element width parent element selector class or id.
fg('selector').node2string('selector or element') // - converting node to string.
fg('selector').string2node('custom html') // - converting html to node.
fg('selector').waitingFor(function(elem) {console.log(elem)}) // - waiting for some element
fg('selector').toggleClass('selector', 'currentClass', 'replaceCurrentClass') // - togglis element class
fg('selector').fullScreen() - // Make element fullScreen
fg('selector').exitFullscreen() - // exit fullScreen
fg(value).timeConverter() - // conver seconds to time 04:22:56
fg('.selector').toggleHTML('Here comes HTML'); // Toggle HTML
fg('.selector').val(); // Will get or set value of the input
fg('.selector').addClass(); // adding class
fg('.selector').removeClass(); // removing class
fg('.selector').addAttr(); // adding attribute
fg('.selector').removeAttr(); // removing attribute
fg('.selector').remove(); // removing element
fg('#selector').scroll(); // This function will scroll to referenced selector (class / id / attribute)

</code>
</pre>
    </div>

</div>



<div class="sects">
    <div class="border padding">
        <p class="mb-2 h5">Ajax function</p>
        <p class="mb-2"><span class="bold">contentType</span> will be seted to false automatically when <span class="bold">new FormData()</span> function appears</p>

<pre class="line-numbers language-javascript">
<code>
// Ajax function simple usage
ajax({
    method: 'POST',
    url: 'something.php',
    data: {
        name: 'woody',
        surname: 'woodpecker'
    },
    success: function(receivedData) {
        fg(selector).html(receivedData);
    }
})


// Ajax function simple usage
// ajax with FormData()
ajax({
    method: 'POST',
    url: 'something.php',
    data: new FormData(this),
    success: function(receivedData) {
        fg(selector).html(receivedData);
    }
})

// Full ajax function usage
ajax({
    method: 'POST',
    url: 'something.php',
    contentType: true,
    error: function(err) {
        console.log(err);
    },
    beforeSend: function() {
        console.log('Loading');
    },
    data: {
        name: 'woody',
        surname: 'woodpecker',
    },
    success: function(receivedData) {
        fg(selector).html(receivedData);
    }
});

</code>
</pre>
    </div>

</div>




<div class="sects">
    <div class="border padding">
        <p class="mb-2 h5">Style function</p>
        <p class="mb-2">Style function adds style to the head</p>
        <p class="mb-2">To use it, add object of styles as an argument of the <span class="bold">style({  })</span> function. Find out example below</p>
<pre class="line-numbers language-javascript">
<code>
style({
    '.selector': {
        'position': 'relative',
        'background-color': 'white',
        'border': '1px solid #f1f1f1'
    },
    '.new-selector': {
        'position': 'relative',
        'background-color': 'white',
        'border': '1px solid #f1f1f1'
    }
});

</code>
</pre>
    </div>
</div>






<div class="sects">
    <div class="border padding">
        <p class="mb-2 h5">Watch function</p>
        <p>This fucntion is quite similar as addeventlistener but the key difference is - it still shoud word even if the elements loads after 
            frameword loading. It still going to work if you load a different html with ajax. 
        </p>

<pre class="line-numbers language-javascript">
<code>
watch('mousedown', 'id=clear', function() {
    fg('#inp-one').val('');
    fg('#inp-two').val('');
});

</code>
</pre>
    </div>
</div>




<div class="sects">
    <div class="border padding">
        <p class="mb-2 h5">Find (find parent element)</p>
        <p class="mb-2">The same as find parent. The difference is - you can add actual attribute of the element to be found</p>
<pre class="line-numbers language-javascript">
<code>
find('#selector', 'id=something');

</code>
</pre>
    </div>
</div>
    




<div class="sects">
    <div class="border padding">
        <p class="mb-2 h5">Document scroll function</p>
        <p class="mb-2">This function will scroll to referenced selector (class / id / attribute)</p>
<pre class="line-numbers language-javascript">
<code>
// This function will scroll to referenced selector (class / id / attribute)
scroll('#selector');

</code>
</pre>
    </div>
</div>
















</div>














<!-- Modal box container -->
<div class="modal" id="modal">
    <div class="modal-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptas molestias saepe nemo error ullam. Suscipit accusamus atque 
            consectetur facilis deserunt velit ipsa, aliquid minima mollitia fuga! 
            Rerum voluptatem dolore quia!</p>
    </div>
</div>




    <script src="../js/freegate.js"></script>
    <script>
        var str;
        get('.language-markup code', function(code) {
            str = code.innerHTML.replace(/</g,'&lt;').replace(/>/g,'&gt;');
            code.innerHTML = str
        });
        // slider
        new FgSlider('slider-1', {
            autoplay: true, // autoplay on / off
            effect: 'slide', // fade, scale, slide, slide-top
            duration: 5000, // duration till the next slide
            bullets: true, // show / hide bullets
        });
        el('#open-confirmbox').onclick = function() {
            certify('Custom text goes here', function() {
                console.log('text from custom function');
            })
        }
    </script>
    <script src="js/prism.js"></script>

</body>
</html>