## 盒模型
    ### 盒模型的概念
        + padding：内边距，可以理解为填充
        + boder：边框：height、width
        + margin：外边距，边框的外部
        ,, 在 CSS 中，width 和 height 指的是内容区域的宽度和高度。增加内边距、边框和外边距不会影响内容区域的尺寸，但是会增加元素框的总尺寸
    inline、block、inline-block和 外边距折叠 的概念
        ,, 外边距折叠：毗邻的两个或多个普通流中的块元素在垂直方向的外边距会合并为一个外边距。

    #### 内外边距，宽度，高度，box-sizing等属性
## CSS 定位 ：position
   ### 有五个不同的位置值：
        1. static：静态（默认），静态定位的元素不受 top、bottom、left 和 right 属性的影响。
        2. relative：相对
        3. fixed：固定
        4. absolute：绝对
        5. sticky：粘性
   ### 浮动，清除浮动 ：float，clear: both 
   ### 被设置了float的元素会脱离文档流
   ### 使用浮动进行布局:
   ### 多列布局：利用伪类 :nth-of-type(){}
    ### 解决布局坍塌
``` css
    * {
        box-sizing: border-box;
    }
```        
## CSS 布局
   ### 多列布局：
       + column-count: 3;     列数
       + column-gap: 10px;    列间隙
       + column-rule: 4px color      加入分割线
   ### 圣杯布局：
   ### 双飞翼布局：

## Flexbox 弹性盒子布局
    display: flex/inline-flex  通过设置 display 属性的值为 flex 或 inline-flex 来定义弹性容器。 
        值 flex 使弹性容器成为块级元素。值 inline-flex 使弹性容器成为单个不可分的行内级元素。  
    轴(Axis): 每个弹性框布局包含两个轴。弹性项目沿其依次排列的那根轴称为主轴(main axis)。垂直于主轴的那根轴称为侧轴(cross axis)。
        1. flex-direction 确立主轴的方向，可取值为：
            row(默认)：主轴为水平方向，起点在左端
            row-reverse：主轴为水平方向，起点在右端
            column：主轴为垂直方向，起点在上沿
            column-reverse：主轴为垂直方向，起点在下沿
        2. justify-content 定义了在当前行上，弹性项目沿主轴如何排布
            flex-start：左对齐（默认值）
            flex-end：右对齐
            center：居中
            space-between：两端对齐，项目之间间隔相等
            space-around：每个项目两侧的间隔相等
        3. align-items 定义了在当前行上，弹性项目沿侧轴默认如何排布
        4. align-self 定义了单个弹性项目在侧轴上应当如何对齐，这个定义会覆盖由 align-items 所确立的默认值。
    由于弹性盒子使用了不同的布局算法，某些属性用在弹性容器上没有意义：
        1. 多栏布局模块的 column-* 属性对弹性项目无效。
        2. float 与 clear 对弹性项目无效。使用 float 将使元素的 display 属性计为block。
        3. vertical-align 对弹性项目的对齐无效。
