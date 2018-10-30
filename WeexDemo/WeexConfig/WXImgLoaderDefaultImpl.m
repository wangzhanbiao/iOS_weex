/**
 * Created by Weex.
 * Copyright (c) 2016, Alibaba, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache Licence 2.0.
 * For the full copyright and license information,please view the LICENSE file in the root directory of this source tree.
 */

#import "WXImgLoaderDefaultImpl.h"
#import <SDWebImage/UIImageView+WebCache.h>

#define MIN_IMAGE_WIDTH 36
#define MIN_IMAGE_HEIGHT 36

#if OS_OBJECT_USE_OBJC
#undef  WXDispatchQueueRelease
#undef  WXDispatchQueueSetterSementics
#define WXDispatchQueueRelease(q)
#define WXDispatchQueueSetterSementics strong
#else
#undef  WXDispatchQueueRelease
#undef  WXDispatchQueueSetterSementics
#define WXDispatchQueueRelease(q) (dispatch_release(q))
#define WXDispatchQueueSetterSementics assign
#endif

@interface WXXImgLoader : NSObject<WXImageOperationProtocol>
@end
@implementation WXXImgLoader
- (void)cancel {}
@end

@interface WXImgLoaderDefaultImpl()

@property (WXDispatchQueueSetterSementics, nonatomic) dispatch_queue_t ioQueue;

@end

@implementation WXImgLoaderDefaultImpl

#pragma mark -
#pragma mark WXImgLoaderProtocol

- (id<WXImageOperationProtocol>)downloadImageWithURL:(NSString *)url imageFrame:(CGRect)imageFrame userInfo:(NSDictionary *)userInfo completed:(void(^)(UIImage *image,  NSError *error, BOOL finished))completedBlock
{
    
    if (![url hasPrefix:@"http"]) {
        
        if ([url hasPrefix:@"assets://"]) {
            NSArray *strArr = [url componentsSeparatedByString:@"//"];
            NSString *bundlePath = [NSBundle mainBundle].bundlePath;
            if (strArr.count > 1) {
                NSString *imageUrl = [NSString stringWithFormat:@"%@/bundlejs/%@",bundlePath,strArr[1]];
                UIImage *image = [UIImage imageWithContentsOfFile:imageUrl];
                completedBlock(image, nil, YES);
                return (id<WXImageOperationProtocol>)[WXXImgLoader new];
            }else{
                return nil;
            }
        }else if ([url hasPrefix:@"file://"]){
            NSArray *strArr = [url componentsSeparatedByString:@"//"];
            if (strArr.count > 1) {
                UIImage *image = [UIImage imageWithContentsOfFile:[[NSBundle mainBundle] pathForResource:strArr[1] ofType:nil]];
                completedBlock(image, nil, YES);
                return (id<WXImageOperationProtocol>)[WXXImgLoader new];
            }else{
                return nil;
            }
        }else{
            
            NSArray *strArr = [url componentsSeparatedByString:@"//"];
            if (strArr.count > 1) {
                UIImage *image = [UIImage imageNamed:strArr[1]];
                completedBlock(image, nil, YES);
                return (id<WXImageOperationProtocol>)[WXXImgLoader new];
            }else{
                return nil;
            }
        }
    }
    
    if ([url hasPrefix:@"//"]) {
        url = [@"http:" stringByAppendingString:url];
    }
    return (id<WXImageOperationProtocol>)[[SDWebImageManager sharedManager] downloadImageWithURL:[NSURL URLWithString:url] options:0 progress:^(NSInteger receivedSize, NSInteger expectedSize) {
        
    } completed:^(UIImage *image, NSError *error, SDImageCacheType cacheType, BOOL finished, NSURL *imageURL) {
        if (completedBlock) {
            completedBlock(image, error, finished);
        }
    }];
}

@end
