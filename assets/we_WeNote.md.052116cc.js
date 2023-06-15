import{_ as i,D as T,o,c as r,z as c,G as t,B as a,O as s,a as e}from"./chunks/framework.46f3d25f.js";const m="/MyWeb/assets/image-20230315234754861.f301611c.png",L=JSON.parse('{"title":"WorldEdit Expressions & Noise Functions in Minecraft","description":"","frontmatter":{},"headers":[],"relativePath":"we/WeNote.md","filePath":"we/WeNote.md"}'),h={name:"we/WeNote.md"},g=s('<h1 id="worldedit-expressions-noise-functions-in-minecraft" tabindex="-1"><strong>WorldEdit Expressions &amp; Noise Functions in Minecraft</strong> <a class="header-anchor" href="#worldedit-expressions-noise-functions-in-minecraft" aria-label="Permalink to &quot;**WorldEdit Expressions &amp; Noise Functions in Minecraft**&quot;">​</a></h1><blockquote><p>Created by <a href="https://twitter.com/Zeranny" target="_blank" rel="noreferrer">Zeranny</a> &amp; <a href="https://twitter.com/eztaK_red" target="_blank" rel="noreferrer">eztaK_red</a>，翻译与修改：FoxBlock</p><p>This guide assumes that you are familiar with at least the basics of<code> WorldEdit</code>(WE) This was all based on experience using what is noted here in the WE Expression Syntax documentation: <a href="https://worldedit.enginehub.org/en/latest/usage/other/expressions/" target="_blank" rel="noreferrer">https://worldedit.enginehub.org/en/latest/usage/other/expressions/</a></p><p>这个指南假定<strong>你至少熟悉<code>WorldEdit</code>（WE）的基础知识</strong>。所有内容都基于使用WE表达式语法文档中所述的内容的经验。<a href="https://worldedit.enginehub.org/en/latest/usage/other/expressions/" target="_blank" rel="noreferrer">https://worldedit.enginehub.org/en/latest/usage/other/expressions/</a></p><p><strong>v1.1</strong></p><p><strong>With thanks to everyone who provided invaluable feedback during the ongoing development of this guide</strong>*</p></blockquote><h2 id="表达式是什么" tabindex="-1">表达式是什么？ <a class="header-anchor" href="#表达式是什么" aria-label="Permalink to &quot;表达式是什么？&quot;">​</a></h2><h3 id="基础" tabindex="-1">基础 <a class="header-anchor" href="#基础" aria-label="Permalink to &quot;基础&quot;">​</a></h3><p>表达式在其最基本的形式上只是一种计算，根据我们的输入返回一个值。将表达式视为您将输入计算器的内容。<code>WorldEdit</code>甚至明确提供了<code>//calculate</code>命令，该命令评估并返回您提供的任何表达式的结果。</p><p>你可以使用的部分运算符在下表中给出：</p><table><thead><tr><th>运算符</th><th>描述</th><th>案例</th><th>类型</th></tr></thead><tbody><tr><td><strong>==</strong></td><td>判断相等</td><td></td><td>比较</td></tr><tr><td><strong>!=</strong></td><td>判断不等</td><td></td><td>比较</td></tr><tr><td><strong>~=</strong></td><td>判断相近</td><td></td><td>比较</td></tr><tr><td><strong>&gt;</strong></td><td>大于</td><td></td><td>比较</td></tr><tr><td><strong>&gt;=</strong></td><td>大于等于</td><td></td><td>比较</td></tr><tr><td><strong>&lt;</strong></td><td>小于</td><td></td><td>比较</td></tr><tr><td><strong>&lt;=</strong></td><td>小于等于</td><td></td><td>比较</td></tr><tr><td>+</td><td></td><td></td><td>运算</td></tr><tr><td>-</td><td></td><td></td><td>运算</td></tr><tr><td>*</td><td></td><td></td><td>运算</td></tr><tr><td>/</td><td></td><td></td><td>运算</td></tr><tr><td>^</td><td>平方</td><td></td><td>运算</td></tr><tr><td>%</td><td>取余</td><td></td><td>运算</td></tr><tr><td>&amp;&amp;</td><td>逻辑与</td><td></td><td>逻辑运算</td></tr><tr><td>||</td><td>逻辑或</td><td></td><td>逻辑运算</td></tr><tr><td>=</td><td>赋值</td><td></td><td>赋值</td></tr><tr><td>+=</td><td>a+=b等效于a=a+b</td><td></td><td>赋值</td></tr><tr><td>-=</td><td></td><td></td><td>赋值</td></tr><tr><td>*=</td><td></td><td></td><td>赋值</td></tr><tr><td>/=</td><td></td><td></td><td>赋值</td></tr><tr><td>%=</td><td></td><td></td><td>赋值</td></tr><tr><td>^=</td><td></td><td></td><td>赋值</td></tr><tr><td>-x</td><td></td><td></td><td>位运算</td></tr><tr><td>~x</td><td></td><td></td><td>位运算</td></tr><tr><td>!x</td><td></td><td></td><td>位运算</td></tr><tr><td>++x</td><td>自增</td><td></td><td></td></tr><tr><td>--x</td><td>自减</td><td></td><td></td></tr><tr><td>x!</td><td>阶乘</td><td></td><td></td></tr><tr><td>x++</td><td>自增</td><td></td><td></td></tr><tr><td>x--</td><td>自减</td><td></td><td></td></tr><tr><td>(a)?x:y</td><td></td><td></td><td>三目运算符</td></tr></tbody></table><p>在<code>WorldEdit</code>中使用表达式语法有三种方法：</p><ul><li>第一种是上述的<code>//calculate</code>命令（缩写为<code>//calc</code>）来计算给定的表达式。</li><li>第二种是定义一个遮罩（请参见：<a href="https://worldedit.enginehub.org/en/latest/usage/general/masks/" target="_blank" rel="noreferrer">WorldEdit文档-遮罩</a>），在其中，您将对与您的遮罩匹配的块应用其他<code>WorldEdit</code>操作，例如“替换”。</li><li>第三种是将它们作为命令的一部分，例如<code>generate</code>，其中您的块模式被放置在与您的表达式匹配的块上。</li></ul><p>​ 然而，后两种方法并不仅仅是一次性计算给定的表达式。当我们定义遮罩或运行<code>generate</code>时，发生的情况是<code>WorldEdit</code>在您选择的每个块上使用其相应的坐标应用我们提供的数学表达式。 该块的确切操作取决于表达式的输出。</p><p>我们将通过使用表达式遮罩和//replace进行一些示例来开始本指南。语法是：</p>',11),u={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},f={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"43.929ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 19416.6 1000","aria-hidden":"true"},_=s('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mo"><path data-c="2F" d="M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z" style="stroke-width:3;"></path></g></g><g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(500,0)"><g data-mml-node="mo"><path data-c="2F" d="M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mi" transform="translate(1000,0)"><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(1451,0)"><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(1917,0)"><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2420,0)"><path data-c="1D459" d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2718,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(3247,0)"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(3680,0)"><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(4146,0)"><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(4424,0)"><g data-mml-node="text"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="text" transform="translate(778,0)"><path data-c="3C" d="M694 -11T694 -19T688 -33T678 -40Q671 -40 524 29T234 166L90 235Q83 240 83 250Q83 261 91 266Q664 540 678 540Q681 540 687 534T694 519T687 505Q686 504 417 376L151 250L417 124Q686 -4 687 -5Q694 -11 694 -19Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mi" transform="translate(6257.8,0)"><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(6723.8,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(7295.8,0)"><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(7798.8,0)"><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(8249.8,0)"><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(8715.8,0)"><path data-c="1D460" d="M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(9184.8,0)"><path data-c="1D460" d="M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(9653.8,0)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(9998.8,0)"><path data-c="1D45C" d="M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(10483.8,0)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(11250.4,0)"><path data-c="2026" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60ZM525 60Q525 84 542 102T585 120Q609 120 627 104T646 61Q646 36 629 18T586 0T543 17T525 60ZM972 60Q972 84 989 102T1032 120Q1056 120 1074 104T1093 61Q1093 36 1076 18T1033 0T990 17T972 60Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(12700.2,0)"><path data-c="3E" d="M84 520Q84 528 88 533T96 539L99 540Q106 540 253 471T544 334L687 265Q694 260 694 250T687 235Q685 233 395 96L107 -40H101Q83 -38 83 -20Q83 -19 83 -17Q82 -10 98 -1Q117 9 248 71Q326 108 378 132L626 250L378 368Q90 504 86 509Q84 513 84 520Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(13478.2,0)"><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(14034,0)"><path data-c="3C" d="M694 -11T694 -19T688 -33T678 -40Q671 -40 524 29T234 166L90 235Q83 240 83 250Q83 261 91 266Q664 540 678 540Q681 540 687 534T694 519T687 505Q686 504 417 376L151 250L417 124Q686 -4 687 -5Q694 -11 694 -19Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(15089.8,0)"><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(15592.8,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(16121.8,0)"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(16482.8,0)"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(16843.8,0)"><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(17309.8,0)"><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(17760.8,0)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(18638.6,0)"><path data-c="3E" d="M84 520Q84 528 88 533T96 539L99 540Q106 540 253 471T544 334L687 265Q694 260 694 250T687 235Q685 233 395 96L107 -40H101Q83 -38 83 -20Q83 -19 83 -17Q82 -10 98 -1Q117 9 248 71Q326 108 378 132L626 250L378 368Q90 504 86 509Q84 513 84 520Z" style="stroke-width:3;"></path></g></g></g>',1),y=[_],k=s('<h4 id="true-false" tabindex="-1"><em>True &amp; False</em> <a class="header-anchor" href="#true-false" aria-label="Permalink to &quot;*True &amp; False*&quot;">​</a></h4><p>​ 定义了哪些块应受到给定命令的影响。一些方块是mask的一部分，而其余的则不是。这正是我们在提供表达式mask时所做的。表达式将返回它通过终点计算出的任何内容，如果返回<strong>True</strong>，则块通过检查，被认为是mask的一部分，并将被命令的其余部分修改，如果返回<strong>False</strong>，则不会被修改。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//replace [=1] green</span></span></code></pre></div><blockquote><p>这条指令中，每个方块的返回值总算1，因此将替换选区替换为绿色羊毛</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//replace [=0] green</span></span></code></pre></div><blockquote><p>这条指令中，每个方块的返回值总算0，因此不对选区产生影响</p></blockquote><p>​ 在上述案例中我们只为表达式的返回值赋予了恒定的0或1，对应False或True。</p><p>因此你可以试着重新理解替换表达式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//replace stone air</span></span></code></pre></div><p>对于这个将石头替换成空气的表达式，如果方块是石头，那么它将返回1，反之，返回0。</p><h4 id="拓展延伸" tabindex="-1">拓展延伸 <a class="header-anchor" href="#拓展延伸" aria-label="Permalink to &quot;拓展延伸&quot;">​</a></h4><p>​ 转移到一个更有用的示例，假设我们有一个16个方块高的区域，我们想要将底部8层改为玻璃，将顶部8层改为石头。这就是表达式变得非常强大的地方，因为它们逐个地运行每个方块，并且可以根据该方块的属性进行评估，最重要的属性是方块的坐标。这些坐标使用内置变量<code>x</code>、<code>y</code>和<code>z</code>进行引用。</p><p>如果您想知道选择区域的坐标和大小，那么<code>//size</code>命令可能会很方便。</p><p>​ 我们可以看到这里我们的最低Y级别是65，所以现在我们需要编写一个命令来为我们更改底部8层，然后再编写一个命令来更改顶部8层。首先，我们将只考虑更改Y级别为65的底层，我们可以通过仅使用等于运算符（==）来实现这一点。这是我们用来检查两个事物是否相等的运算符，它分别被计算为<strong>True</strong>或<strong>False</strong>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//replace [=y==65] glass</span></span></code></pre></div><p>​ 在上述指令中，我们可以看到一个基本示例，说明如何使用块的坐标值将块替换为玻璃，无论Y级别是否等于65。请记住，表达式会为每个方块进行评估，并且x、y、z变量将设置为方块的相应坐标。例如，在选择中一个块的Y级别为65，y变量将被评估为65，在Y级别为100的地方，y变量将为100。这意味着在上述指令中，只有Y坐标为65的方块将评估表达式<code>y==65</code>，因为<code>65==65</code>返回<strong>true</strong>。与此同时，所有其他层都不会被填充，因为例如Y级别为66的块将评估表达式<code>66==65</code>，当然返回false。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//replace [=y&gt;=65+8] stone</span></span></code></pre></div><p>​ 现在将其更改为<code>&gt;=65+8</code>（大于或等于65+8），我们将替换Y级别为73或更高的位置上的方块为石头。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//replace [=y&gt;=65+8] stone</span></span></code></pre></div><p>​ 然而，我们的命令只能放置8行方块，这是因为我们选择的大小限制了它。如果我们扩大选择区域，它将继续放置方块。我们可以通过扩大选择区域的大小来验证这一点。</p><hr><p>当然，我们可以在表达式中以有趣的方式将其与其他运算符结合起来。例如，使用模运算符将选择中每3层替换为一个方块，或者在将所有坐标相乘时得到奇数的位置上替换方块。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//replace [=(y%3)==0] 1</span></span></code></pre></div><p>在上述指令中，我们对每个方块取其Y级别并将其除以3，然后查看余数是多少。例如，对于Y级别为65的方块，y%3的计算结果为65%3，因为65/3等于21，余数为2。所以在这里，<code>65%3==0</code>的计算结果是<code>2==0</code>，由于2不等于0，我们返回false并且不将该层设置为石头。</p><hr><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//replace [=(abs(x*y*z)%2)==1] 1</span></span></code></pre></div><p>​ 对于上述命令，我们将坐标相乘，并在结果为奇数时将方块设置为石头。这是因为偶数除以2的余数为0，而奇数除以2的余数为1。</p><p>​ 除此之外，如果我们希望，我们可以使用称为逻辑运算符的内容添加多个额外条件，将它们链接在一起。具体内容见下一小节。</p><p><img src="'+m+'" alt="image-20230315234754861"></p>',29);function x(w,b,H,M,Z,C){const Q=T("mo"),l=T("mrow"),d=T("mi"),n=T("math"),p=T("mjx-assistive-mml");return o(),r("div",null,[g,c("mjx-container",u,[(o(),r("svg",f,y)),t(p,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:a(()=>[t(n,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:a(()=>[t(l,{"data-mjx-texclass":"ORD"},{default:a(()=>[t(Q,null,{default:a(()=>[e("/")]),_:1})]),_:1}),t(l,{"data-mjx-texclass":"ORD"},{default:a(()=>[t(Q,null,{default:a(()=>[e("/")]),_:1})]),_:1}),t(d,null,{default:a(()=>[e("r")]),_:1}),t(d,null,{default:a(()=>[e("e")]),_:1}),t(d,null,{default:a(()=>[e("p")]),_:1}),t(d,null,{default:a(()=>[e("l")]),_:1}),t(d,null,{default:a(()=>[e("a")]),_:1}),t(d,null,{default:a(()=>[e("c")]),_:1}),t(d,null,{default:a(()=>[e("e")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[e("[")]),_:1}),t(Q,null,{default:a(()=>[e("=<")]),_:1}),t(d,null,{default:a(()=>[e("e")]),_:1}),t(d,null,{default:a(()=>[e("x")]),_:1}),t(d,null,{default:a(()=>[e("p")]),_:1}),t(d,null,{default:a(()=>[e("r")]),_:1}),t(d,null,{default:a(()=>[e("e")]),_:1}),t(d,null,{default:a(()=>[e("s")]),_:1}),t(d,null,{default:a(()=>[e("s")]),_:1}),t(d,null,{default:a(()=>[e("i")]),_:1}),t(d,null,{default:a(()=>[e("o")]),_:1}),t(d,null,{default:a(()=>[e("n")]),_:1}),t(Q,null,{default:a(()=>[e("…")]),_:1}),t(Q,null,{default:a(()=>[e(">")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[e("]")]),_:1}),t(Q,null,{default:a(()=>[e("<")]),_:1}),t(d,null,{default:a(()=>[e("p")]),_:1}),t(d,null,{default:a(()=>[e("a")]),_:1}),t(d,null,{default:a(()=>[e("t")]),_:1}),t(d,null,{default:a(()=>[e("t")]),_:1}),t(d,null,{default:a(()=>[e("e")]),_:1}),t(d,null,{default:a(()=>[e("r")]),_:1}),t(d,null,{default:a(()=>[e("n")]),_:1}),t(Q,null,{default:a(()=>[e(">")]),_:1})]),_:1})]),_:1})]),k])}const v=i(h,[["render",x]]);export{L as __pageData,v as default};
