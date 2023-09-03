<script>
</script>

<div class="header">
    <div class="h_left">
        <div class="left">
            <div class="left1">
                <div class="left1_1" />
                <div class="left1_2" />
            </div>
            <div class="left2" />
        </div>
        <div class="left_footer" />
    </div>
    <div class="right">
        <div class="right_header" />
        <div class="right_footer">
            <div class="right_left">
                <div class="inside_div">
                    <div class="circle">
                        <div class="triangle_1" />
                        <div class="triangle_2" />
                    </div>
                </div>
            </div>
            <div class="right_right" />
        </div>
    </div>
</div>

<style>
    .header {
        width: 90%;
        margin: auto;
        display: flex;
    }
    .h_left {
        width: 100%;
        height: 600px;
    }
    .left {
        height: 500px;
        width: 100%;
        display: flex;
    }
    .left1 {
        width: 32%;
    }
    .left1_1 {
        height: 300px;
        background-color: #4299e1;
    }
    .left1_2 {
        height: 200px;
        background-color: rgb(0, 150, 136);
    }
    .left2 {
        width: 68%;
        height: auto;
        background-color: #faebd7;
    }
    .left_footer {
        width: 100%;
        height: 100px;
        background-color: rgb(255, 0, 255);
    }
    .right {
        height: 600px;
        width: 100%;
    }
    .right_header {
        width: 100%;
        height: 200px;
        background-color: #4299e1;
    }
    .right_footer {
        display: flex;
        height: 400px;
    }
    .right_left {
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(255, 244, 196);
    }
    .inside_div {
        width: 200px;
        height: 200px;
        background-color: #293462;
        display: flex;
        align-items: center;
        justify-content: center;

        position: relative;
    }
    .circle {
        display: flex;
        width: 150px;
        height: 150px;
        background-color: rgb(255, 244, 196);
        border-radius: 50%;
        position: absolute;
        overflow: hidden;
    }
    .triangle_1 {
        margin-left: -8px;
        margin-top: 90px;
        width: 0;
        height: 0;
        border-left: 36px solid transparent;
        border-right: 36px solid transparent;

        border-bottom: 48px solid #fe5f55;
    }
    .triangle_2 {
        margin-left: -90px;
        margin-top: 59px;
        width: 0;
        height: 0;
        border-left: 124px solid transparent;
        border-right: 120px solid transparent;

        border-bottom: 123px solid #fe5f55;
    }
    .right_right {
        width: 30%;

        background-color: rgb(46, 204, 113);
    }
    @media only screen and (max-width: 600px) {
        /* body {
            background-color: lightblue;
        } */
        .header {
            width: 100%;
            display: block;
            margin: auto;
        }
        .h_left {
            width: 100%;
            height: 500px;
        }

        .left1 {
            display: none;
        }
        .left2 {
            width: 100%;
            height: auto;
            background-color: #faebd7;
        }
        .left_footer {
            display: none;
        }
        .right_header {
            display: none;
        }
        .right_right {
            display: none;
        }
        .right_left {
            width: 100%;
        }
    }
</style>
