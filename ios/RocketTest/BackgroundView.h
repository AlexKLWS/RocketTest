//
//  BackgroundView.h
//  RocketTest
//
//  Created by Alex Korzh on 3/27/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#ifndef BackgroundView_h
#define BackgroundView_h

#import <UIKit/UIKit.h>
#import <React/RCTRootView.h>

@interface BackgroundView : UIViewController

@property (weak, nonatomic) IBOutlet UIImageView *backgroundImageView;
@property (weak, nonatomic) IBOutlet UIImageView *appIconsImageView;

+ (BackgroundView *) storyboardInstance;

@end

#endif /* BackgroundView_h */
